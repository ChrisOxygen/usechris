"use client";

import { useState, useCallback } from "react";
import { DayPicker } from "react-day-picker";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  RiCloseLine,
  RiArrowLeftLine,
  RiVideoLine,
  RiCalendarLine,
} from "react-icons/ri";

// ─── Types ────────────────────────────────────────────────────────────────────

interface TimeSlot {
  start: string;
  end: string;
  label: string;
}

const bookingSchema = z.object({
  name: z.string().min(2, "At least 2 characters"),
  email: z.string().email("Invalid email address"),
  notes: z.string().optional(),
  platform: z.enum(["zoom", "google_meet"] as const),
});

type BookingFormData = z.infer<typeof bookingSchema>;
type Step = "calendar" | "slots" | "form" | "submitting" | "success" | "error";

// ─── react-day-picker classNames ──────────────────────────────────────────────
// Selected / today / disabled state is handled by .booking-cal CSS in globals.css
// using data-* attributes that react-day-picker sets on the button element.

const DAY_PICKER_CLASSES = {
  root: "w-full",
  months: "w-full",
  month: "relative w-full",
  month_caption: "flex justify-center mb-4",
  caption_label:
    "font-squada-one text-sm tracking-widest text-foreground uppercase py-1",
  nav: "absolute top-0 left-0 w-full flex items-center justify-between",
  button_previous:
    "w-7 h-7 flex items-center justify-center text-muted hover:text-foreground transition-colors rounded-lg hover:bg-white/5 [&_svg]:size-3",
  button_next:
    "w-7 h-7 flex items-center justify-center text-muted hover:text-foreground transition-colors rounded-lg hover:bg-white/5 [&_svg]:size-3",
  month_grid: "w-full",
  weekdays: "",
  weekday:
    "pb-2 font-squada-one text-xs text-muted/50 tracking-wide text-center",
  week: "",
  day: "text-center p-0.5",
  day_button:
    "mx-auto w-9 h-9 flex items-center justify-center font-source-code-pro text-sm text-muted rounded-lg transition-all duration-150 hover:bg-accent/20 hover:text-foreground",
  selected: "",
  today: "",
  outside: "",
  disabled: "",
  hidden: "invisible",
  focused: "",
} as Record<string, string>;

// ─── Step header titles ───────────────────────────────────────────────────────

const STEP_TITLE: Record<Step, string> = {
  calendar: "Pick a date",
  slots: "Choose a time",
  form: "Your details",
  submitting: "Booking...",
  success: "You're booked!",
  error: "Slot unavailable",
};

// ─── Component ────────────────────────────────────────────────────────────────

export default function BookingModal({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const [step, setStep] = useState<Step>("calendar");
  const [selectedDate, setSelectedDate] = useState<Date | undefined>();
  const [slots, setSlots] = useState<TimeSlot[]>([]);
  const [selectedSlot, setSelectedSlot] = useState<TimeSlot | null>(null);
  const [isLoadingSlots, setIsLoadingSlots] = useState(false);
  const [meetingLink, setMeetingLink] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch,
    setValue,
  } = useForm<BookingFormData>({
    resolver: zodResolver(bookingSchema),
    defaultValues: { platform: "google_meet" },
  });

  const platform = watch("platform");

  // ── Fetch slots for a selected date ────────────────────────────────────────

  const handleDateSelect = useCallback(async (date: Date | undefined) => {
    if (!date) return;
    setSelectedDate(date);
    setIsLoadingSlots(true);
    setSlots([]);
    setStep("slots");

    const dateStr = date.toISOString().split("T")[0];
    try {
      const res = await fetch(`/api/availability?date=${dateStr}`);
      const data = await res.json();
      if (data.error) throw new Error(data.error);
      setSlots(data.slots ?? []);
    } catch {
      setSlots([]);
    } finally {
      setIsLoadingSlots(false);
    }
  }, []);

  // ── Select a time slot ──────────────────────────────────────────────────────

  const handleSlotSelect = (slot: TimeSlot) => {
    setSelectedSlot(slot);
    setStep("form");
  };

  // ── Submit the form ─────────────────────────────────────────────────────────

  const onSubmit = async (data: BookingFormData) => {
    if (!selectedDate || !selectedSlot) return;
    setStep("submitting");

    try {
      const res = await fetch("/api/book", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...data,
          slotStart: selectedSlot.start,
          slotEnd: selectedSlot.end,
          date: selectedDate.toISOString().split("T")[0],
        }),
      });
      const result = await res.json();

      if (result.success) {
        setMeetingLink(result.meetingLink ?? "");
        setStep("success");
        reset();
      } else {
        setErrorMessage(
          result.error ?? "That slot was just taken. Please choose another time."
        );
        setStep("error");
      }
    } catch {
      setErrorMessage("Something went wrong. Please try again.");
      setStep("error");
    }
  };

  // ── Close & reset ───────────────────────────────────────────────────────────

  const handleClose = () => {
    setStep("calendar");
    setSelectedDate(undefined);
    setSlots([]);
    setSelectedSlot(null);
    setErrorMessage("");
    setMeetingLink("");
    reset();
    onClose();
  };

  const goBack = () => {
    if (step === "slots") {
      setSelectedDate(undefined);
      setSlots([]);
      setStep("calendar");
    } else if (step === "form") {
      setSelectedSlot(null);
      setStep("slots");
    } else if (step === "error") {
      setStep("form");
    }
  };

  if (!isOpen) return null;

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const showBack = step === "slots" || step === "form" || step === "error";

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
      onClick={(e) => {
        if (e.target === e.currentTarget) handleClose();
      }}
    >
      <div className="relative w-full max-w-md bg-surface border border-white/5 rounded-2xl shadow-2xl overflow-hidden">
        {/* ── Header ── */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/5">
          <div className="flex items-center gap-3">
            {showBack && (
              <button
                onClick={goBack}
                className="text-muted hover:text-foreground transition-colors"
                aria-label="Go back"
              >
                <RiArrowLeftLine size={18} />
              </button>
            )}
            <h2 className="font-russo-one text-base text-foreground">
              {STEP_TITLE[step]}
            </h2>
          </div>
          <button
            onClick={handleClose}
            className="text-muted hover:text-foreground transition-colors"
            aria-label="Close"
          >
            <RiCloseLine size={20} />
          </button>
        </div>

        {/* ── Body ── */}
        <div className="px-6 py-6 min-h-[340px]">

          {/* Step: Calendar */}
          {step === "calendar" && (
            <div>
              <p className="font-source-code-pro text-xs text-muted mb-5">
                All times are in GMT. Pick any available weekday to see open slots.
              </p>
              <div className="booking-cal">
                <DayPicker
                  mode="single"
                  selected={selectedDate}
                  onSelect={handleDateSelect}
                  startMonth={today}
                  disabled={[{ before: today }, { dayOfWeek: [0, 6] }]}
                  classNames={DAY_PICKER_CLASSES}
                />
              </div>
            </div>
          )}

          {/* Step: Slots */}
          {step === "slots" && (
            <div>
              {selectedDate && (
                <p className="font-squada-one text-xs text-accent tracking-wider uppercase mb-5">
                  {selectedDate.toLocaleDateString("en-GB", {
                    weekday: "long",
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  })}
                </p>
              )}

              {isLoadingSlots ? (
                <div className="flex items-center justify-center py-16">
                  <div className="w-5 h-5 border-2 border-accent border-t-transparent rounded-full animate-spin" />
                </div>
              ) : slots.length === 0 ? (
                <div className="text-center py-16 space-y-4">
                  <p className="font-source-code-pro text-sm text-muted">
                    No slots available on this day.
                  </p>
                  <button
                    onClick={goBack}
                    className="font-squada-one text-xs text-accent hover:text-accent-light tracking-wider transition-colors"
                  >
                    ← Pick a different date
                  </button>
                </div>
              ) : (
                <div className="grid grid-cols-3 gap-2">
                  {slots.map((slot) => (
                    <button
                      key={slot.start}
                      onClick={() => handleSlotSelect(slot)}
                      className="py-2.5 px-2 bg-background border border-white/8 hover:border-accent/60 hover:bg-accent/10 text-muted hover:text-foreground font-source-code-pro text-xs rounded-lg transition-all duration-150 text-center"
                    >
                      {slot.label}
                    </button>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* Step: Form */}
          {step === "form" && (
            <div>
              {selectedDate && selectedSlot && (
                <div className="flex items-center gap-2 mb-5 px-3 py-2.5 bg-background rounded-lg border border-white/5">
                  <RiCalendarLine size={13} className="text-accent shrink-0" />
                  <span className="font-source-code-pro text-xs text-muted">
                    {selectedDate.toLocaleDateString("en-GB", {
                      weekday: "short",
                      day: "numeric",
                      month: "short",
                    })}
                    {" · "}
                    {selectedSlot.label} GMT
                  </span>
                </div>
              )}

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                {/* Name */}
                <div>
                  <label className="block font-squada-one text-xs tracking-wider text-muted uppercase mb-1.5">
                    Name
                  </label>
                  <input
                    {...register("name")}
                    type="text"
                    placeholder="Jane Smith"
                    className="w-full bg-background border border-white/10 focus:border-accent/40 outline-none text-foreground font-source-code-pro text-sm px-4 py-3 rounded-lg transition-colors placeholder:text-muted/30"
                  />
                  {errors.name && (
                    <p className="mt-1 font-source-code-pro text-xs text-accent/80">
                      {errors.name.message}
                    </p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label className="block font-squada-one text-xs tracking-wider text-muted uppercase mb-1.5">
                    Email
                  </label>
                  <input
                    {...register("email")}
                    type="email"
                    placeholder="jane@company.com"
                    className="w-full bg-background border border-white/10 focus:border-accent/40 outline-none text-foreground font-source-code-pro text-sm px-4 py-3 rounded-lg transition-colors placeholder:text-muted/30"
                  />
                  {errors.email && (
                    <p className="mt-1 font-source-code-pro text-xs text-accent/80">
                      {errors.email.message}
                    </p>
                  )}
                </div>

                {/* Notes */}
                <div>
                  <label className="block font-squada-one text-xs tracking-wider text-muted uppercase mb-1.5">
                    Notes{" "}
                    <span className="normal-case font-source-code-pro font-normal tracking-normal text-muted/40">
                      (optional)
                    </span>
                  </label>
                  <textarea
                    {...register("notes")}
                    rows={3}
                    placeholder="What would you like to discuss?"
                    className="w-full bg-background border border-white/10 focus:border-accent/40 outline-none text-foreground font-source-code-pro text-sm px-4 py-3 rounded-lg transition-colors placeholder:text-muted/30 resize-none"
                  />
                </div>

                {/* Platform toggle */}
                <div>
                  <label className="block font-squada-one text-xs tracking-wider text-muted uppercase mb-2">
                    Platform
                  </label>
                  <div className="flex gap-2">
                    {(["zoom", "google_meet"] as const).map((p) => (
                      <button
                        key={p}
                        type="button"
                        onClick={() => setValue("platform", p)}
                        className={[
                          "flex-1 flex items-center justify-center gap-2 py-2.5 px-4 rounded-lg border font-squada-one text-xs tracking-wider transition-all duration-150",
                          platform === p
                            ? "bg-accent/15 border-accent/60 text-foreground"
                            : "bg-background border-white/10 text-muted hover:border-white/20",
                        ].join(" ")}
                      >
                        <RiVideoLine size={13} aria-hidden="true" />
                        {p === "zoom" ? "Zoom" : "Google Meet"}
                      </button>
                    ))}
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 bg-accent hover:bg-accent-light text-foreground font-squada-one text-sm tracking-widest rounded-xl transition-all duration-200"
                >
                  Confirm Booking
                </button>
              </form>
            </div>
          )}

          {/* Step: Submitting */}
          {step === "submitting" && (
            <div className="flex flex-col items-center justify-center h-64 gap-4">
              <div className="w-6 h-6 border-2 border-accent border-t-transparent rounded-full animate-spin" />
              <p className="font-source-code-pro text-sm text-muted">
                Locking in your slot...
              </p>
            </div>
          )}

          {/* Step: Success */}
          {step === "success" && (
            <div className="flex flex-col items-center text-center py-8 gap-5">
              <div className="w-14 h-14 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  aria-hidden="true"
                  className="text-accent"
                >
                  <path
                    d="M5 12l5 5 9-9"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div className="space-y-2">
                <h3 className="font-russo-one text-xl text-foreground">
                  You&apos;re booked!
                </h3>
                <p className="font-source-code-pro text-sm text-muted leading-relaxed max-w-xs">
                  A confirmation email is on its way. Looking forward to
                  chatting.
                </p>
              </div>
              {meetingLink && (
                <a
                  href={meetingLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-accent hover:bg-accent-light text-foreground font-squada-one text-sm tracking-widest rounded-xl transition-all duration-200"
                >
                  <RiVideoLine size={15} aria-hidden="true" />
                  Open Meeting Link
                </a>
              )}
              <button
                onClick={handleClose}
                className="font-squada-one text-xs text-muted/50 hover:text-muted tracking-wider transition-colors"
              >
                Close
              </button>
            </div>
          )}

          {/* Step: Error */}
          {step === "error" && (
            <div className="flex flex-col items-center text-center py-8 gap-5">
              <div className="w-14 h-14 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  aria-hidden="true"
                  className="text-accent"
                >
                  <path
                    d="M12 9v4m0 4h.01M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div className="space-y-2">
                <h3 className="font-russo-one text-xl text-foreground">
                  Slot taken
                </h3>
                <p className="font-source-code-pro text-sm text-muted leading-relaxed max-w-xs">
                  {errorMessage}
                </p>
              </div>
              <button
                onClick={goBack}
                className="font-squada-one text-xs text-accent hover:text-accent-light tracking-wider transition-colors"
              >
                ← Try a different time
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
