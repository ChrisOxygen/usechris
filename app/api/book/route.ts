import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

const bookingSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  notes: z.string().optional(),
  platform: z.enum(["zoom", "google_meet"] as const),
  slotStart: z.string(),
  slotEnd: z.string(),
  date: z.string(),
});

export async function POST(request: NextRequest) {
  const webhookUrl = process.env.N8N_BOOKING_WEBHOOK_URL;
  if (!webhookUrl) {
    return NextResponse.json(
      { success: false, error: "Booking is not configured yet. Please email chris@usechris.dev directly." },
      { status: 503 }
    );
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { success: false, error: "Invalid request." },
      { status: 400 }
    );
  }

  const parsed = bookingSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { success: false, error: "Invalid booking data." },
      { status: 400 }
    );
  }

  try {
    const res = await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(parsed.data),
    });

    const result = await res.json();
    return NextResponse.json(result);
  } catch (err) {
    console.error("[book]", err);
    return NextResponse.json(
      { success: false, error: "Failed to create booking. Please try again." },
      { status: 500 }
    );
  }
}
