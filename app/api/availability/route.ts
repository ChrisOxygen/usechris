import { NextRequest, NextResponse } from "next/server";
import { getCalendarClient } from "@/lib/google";

// Your working hours — adjust to your actual availability
const WORKING_HOURS = { start: 8, end: 20 }; // 8am–8pm WAT
const SLOT_DURATION = 30; // minutes
const BUFFER = 15; // minutes between calls

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const date = searchParams.get("date"); // expects YYYY-MM-DD

  if (!date) {
    return NextResponse.json({ error: "Date required" }, { status: 400 });
  }

  try {
    const calendar = getCalendarClient();

    const dayStart = new Date(`${date}T00:00:00+01:00`); // WAT offset
    const dayEnd = new Date(`${date}T23:59:59+01:00`);

    // Query Google Calendar freebusy to get busy periods
    const freeBusyRes = await calendar.freebusy.query({
      requestBody: {
        timeMin: dayStart.toISOString(),
        timeMax: dayEnd.toISOString(),
        timeZone: "Africa/Lagos",
        items: [{ id: process.env.GOOGLE_CALENDAR_ID || "primary" }],
      },
    });

    const calendarId = process.env.GOOGLE_CALENDAR_ID || "primary";
    const busySlots =
      freeBusyRes.data.calendars?.[calendarId]?.busy || [];

    // Generate all possible slots within working hours
    const allSlots: string[] = [];
    for (let h = WORKING_HOURS.start; h < WORKING_HOURS.end; h++) {
      for (let m = 0; m < 60; m += SLOT_DURATION) {
        const slotTime = `${String(h).padStart(2, "0")}:${String(m).padStart(2, "0")}`;
        allSlots.push(slotTime);
      }
    }

    // Build all slots, marking booked ones instead of filtering them out
    const slots = allSlots.map((slot) => {
      const slotStart = new Date(`${date}T${slot}:00+01:00`);
      const slotEnd = new Date(
        slotStart.getTime() + (SLOT_DURATION + BUFFER) * 60000,
      );

      const booked = busySlots.some((busy) => {
        const busyStart = new Date(busy.start!);
        const busyEnd = new Date(busy.end!);
        return slotStart < busyEnd && slotEnd > busyStart;
      });

      const [h, m] = slot.split(":").map(Number);
      const endMinutes = h * 60 + m + SLOT_DURATION;
      const endH = Math.floor(endMinutes / 60);
      const endM = endMinutes % 60;
      const end = `${String(endH).padStart(2, "0")}:${String(endM).padStart(2, "0")}`;
      return {
        start: slot,
        end,
        label: `${slot} – ${end}`,
        booked,
      };
    });

    return NextResponse.json({ slots });
  } catch (error) {
    console.error("Availability error:", error);
    return NextResponse.json(
      { error: "Failed to fetch availability" },
      { status: 500 },
    );
  }
}
