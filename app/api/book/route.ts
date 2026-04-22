import { NextRequest, NextResponse } from "next/server";
import { headers } from "next/headers";
import { getCalendarClient } from "@/lib/google";
import { Resend } from "resend";
import ical from "ical-generator";
import { render } from "@react-email/render";
import { ClientConfirmationEmail } from "@/emails/ClientConfirmation";
import { OwnerNotificationEmail } from "@/emails/OwnerNotification";
import { ipRatelimit, emailRatelimit } from "@/lib/ratelimit";

const resend = new Resend(process.env.RESEND_API_KEY);

// ─── Zoom token helper ───────────────────────────────────────────────
async function getZoomAccessToken(): Promise<string> {
  const credentials = Buffer.from(
    `${process.env.ZOOM_CLIENT_ID}:${process.env.ZOOM_CLIENT_SECRET}`,
  ).toString("base64");

  const res = await fetch(
    `https://zoom.us/oauth/token?grant_type=account_credentials&account_id=${process.env.ZOOM_ACCOUNT_ID}`,
    {
      method: "POST",
      headers: { Authorization: `Basic ${credentials}` },
    },
  );
  const data = await res.json();
  return data.access_token;
}

// ─── Create Zoom meeting ─────────────────────────────────────────────
async function createZoomMeeting(topic: string, startTime: string) {
  const token = await getZoomAccessToken();
  const res = await fetch("https://api.zoom.us/v2/users/me/meetings", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      topic,
      type: 2, // scheduled
      start_time: startTime,
      duration: 30,
      settings: { join_before_host: true },
    }),
  });
  const data = await res.json();
  return data.join_url as string;
}

// ─── Main handler ────────────────────────────────────────────────────
export async function POST(req: NextRequest) {
  const headersList = await headers();
  const ip =
    headersList.get("x-forwarded-for")?.split(",")[0].trim() ?? "anonymous";

  const body = await req.json();
  const { name, email, notes, platform, date, slotStart } = body;

  const [ipCheck, emailCheck] = await Promise.all([
    ipRatelimit.limit(ip),
    emailRatelimit.limit(`email:${email}`),
  ]);

  if (!ipCheck.success || !emailCheck.success) {
    const reset = !ipCheck.success ? ipCheck.reset : emailCheck.reset;
    const retryAfter = Math.ceil((reset - Date.now()) / 1000);
    return NextResponse.json(
      { error: "Too many booking attempts. Please try again later." },
      {
        status: 429,
        headers: {
          "Retry-After": String(retryAfter),
          "X-RateLimit-Remaining": "0",
        },
      },
    );
  }

  // Build start/end ISO strings
  const startDate = new Date(`${date}T${slotStart}:00+01:00`); // WAT
  const endDate = new Date(startDate.getTime() + 30 * 60000);

  const calendar = getCalendarClient();

  // ── 1. Conflict check ─────────────────────────────────────────────
  const conflictCheck = await calendar.freebusy.query({
    requestBody: {
      timeMin: startDate.toISOString(),
      timeMax: endDate.toISOString(),
      timeZone: "Africa/Lagos",
      items: [{ id: process.env.GOOGLE_CALENDAR_ID || "primary" }],
    },
  });

  const busy = conflictCheck.data.calendars?.primary?.busy || [];
  if (busy.length > 0) {
    return NextResponse.json(
      {
        success: false,
        error: "This slot was just taken. Please choose another time.",
      },
      { status: 409 },
    );
  }

  // ── 2. Generate meeting link ───────────────────────────────────────
  let meetingLink = "";

  if (platform === "zoom") {
    meetingLink = await createZoomMeeting(
      `Discovery Call — ${name}`,
      startDate.toISOString(),
    );

    // Create calendar event with Zoom link in description
    await calendar.events.insert({
      calendarId: process.env.GOOGLE_CALENDAR_ID || "primary",
      requestBody: {
        summary: `Discovery Call — ${name}`,
        description: `Zoom Link: ${meetingLink}\n\nClient email: ${email}\n\nPurpose: ${notes || "Not provided"}`,
        start: { dateTime: startDate.toISOString(), timeZone: "Africa/Lagos" },
        end: { dateTime: endDate.toISOString(), timeZone: "Africa/Lagos" },
        attendees: [{ email }],
      },
    });
  } else {
    // Google Meet — conferenceData generates the Meet link automatically
    const event = await calendar.events.insert({
      calendarId: process.env.GOOGLE_CALENDAR_ID || "primary",
      conferenceDataVersion: 1,
      requestBody: {
        summary: `Discovery Call — ${name}`,
        description: `Client email: ${email}\n\nPurpose: ${notes || "Not provided"}`,
        start: { dateTime: startDate.toISOString(), timeZone: "Africa/Lagos" },
        end: { dateTime: endDate.toISOString(), timeZone: "Africa/Lagos" },
        attendees: [{ email }],
        conferenceData: {
          createRequest: {
            requestId: `booking-${Date.now()}`,
            conferenceSolutionKey: { type: "hangoutsMeet" },
          },
        },
      },
    });

    meetingLink = event.data.conferenceData?.entryPoints?.[0]?.uri || "";
  }

  // ── 3. Generate .ics calendar invite ──────────────────────────────
  const icsCalendar = ical({ name: "Discovery Call" });
  icsCalendar.createEvent({
    start: startDate,
    end: endDate,
    summary: `Discovery Call with Chris`,
    description: `${platform === "zoom" ? "Zoom" : "Google Meet"} link: ${meetingLink}`,
    location: meetingLink,
    url: meetingLink,
    organizer: { name: "Chris Okafor", email: process.env.RESEND_FROM_EMAIL! },
    attendees: [{ name, email }],
  });
  const icsContent = icsCalendar.toString();

  // ── 4. Format readable date/time for emails ───────────────────────
  const readableDate = startDate.toLocaleDateString("en-GB", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  const readableTime = startDate.toLocaleTimeString("en-GB", {
    hour: "2-digit",
    minute: "2-digit",
  });

  // ── 5. Send confirmation email to client ──────────────────────────
  const clientHtml = await render(
    ClientConfirmationEmail({
      name,
      date: readableDate,
      time: readableTime,
      platform,
      meetingLink,
      notes,
    }),
  );

  await resend.emails.send({
    from: `Chris Okafor <${process.env.RESEND_FROM_EMAIL}>`,
    to: email,
    subject: "Your call with Chris is confirmed",
    html: clientHtml,
    attachments: [
      {
        filename: "invite.ics",
        content: Buffer.from(icsContent).toString("base64"),
        contentType: "text/calendar",
      },
    ],
  });

  // ── 6. Send notification email to yourself ────────────────────────
  const ownerHtml = await render(
    OwnerNotificationEmail({
      clientName: name,
      clientEmail: email,
      date: readableDate,
      time: readableTime,
      platform,
      meetingLink,
      notes,
    }),
  );

  await resend.emails.send({
    from: `Booking System <${process.env.RESEND_FROM_EMAIL}>`,
    to: process.env.NOTIFICATION_EMAIL!,
    subject: `New booking — ${name} on ${readableDate}`,
    html: ownerHtml,
  });

  // ── 7. Return success ─────────────────────────────────────────────
  return NextResponse.json({ success: true, meetingLink, platform });
}
