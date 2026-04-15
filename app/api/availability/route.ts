import { google } from "googleapis";
import { NextRequest, NextResponse } from "next/server";

const WORKING_HOURS_START = 9; // 09:00 UTC
const WORKING_HOURS_END = 17; // 17:00 UTC
const SLOT_MINUTES = 15;

interface BusyPeriod {
  start: string;
  end: string;
}

function generateSlots(date: string, busyPeriods: BusyPeriod[]) {
  const slots: { start: string; end: string; label: string }[] = [];
  const now = new Date();

  for (let h = WORKING_HOURS_START; h < WORKING_HOURS_END; h++) {
    for (let m = 0; m < 60; m += SLOT_MINUTES) {
      const hh = String(h).padStart(2, "0");
      const mm = String(m).padStart(2, "0");
      const slotStart = new Date(`${date}T${hh}:${mm}:00.000Z`);
      const slotEnd = new Date(slotStart.getTime() + SLOT_MINUTES * 60_000);

      // Skip slots already in the past
      if (slotStart <= now) continue;

      const isBusy = busyPeriods.some(({ start, end }) => {
        const busyStart = new Date(start);
        const busyEnd = new Date(end);
        return slotStart < busyEnd && slotEnd > busyStart;
      });

      if (!isBusy) {
        const label = slotStart.toLocaleTimeString("en-GB", {
          hour: "2-digit",
          minute: "2-digit",
          timeZone: "UTC",
        });
        slots.push({
          start: slotStart.toISOString(),
          end: slotEnd.toISOString(),
          label,
        });
      }
    }
  }

  return slots;
}

export async function GET(request: NextRequest) {
  const date = new URL(request.url).searchParams.get("date");

  if (!date || !/^\d{4}-\d{2}-\d{2}$/.test(date)) {
    return NextResponse.json(
      { error: "A valid date (YYYY-MM-DD) is required." },
      { status: 400 }
    );
  }

  try {
    const auth = new google.auth.OAuth2(
      process.env.GOOGLE_CLIENT_ID,
      process.env.GOOGLE_CLIENT_SECRET
    );
    auth.setCredentials({ refresh_token: process.env.GOOGLE_REFRESH_TOKEN });

    const calendar = google.calendar({ version: "v3", auth });

    const { data } = await calendar.freebusy.query({
      requestBody: {
        timeMin: `${date}T00:00:00Z`,
        timeMax: `${date}T23:59:59Z`,
        items: [{ id: "primary" }],
      },
    });

    const busy = (data.calendars?.primary?.busy ?? []) as BusyPeriod[];
    const slots = generateSlots(date, busy);

    return NextResponse.json({ slots });
  } catch (err) {
    console.error("[availability]", err);
    return NextResponse.json(
      { error: "Failed to fetch availability." },
      { status: 500 }
    );
  }
}
