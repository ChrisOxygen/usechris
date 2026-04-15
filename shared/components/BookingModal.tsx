"use client";

import { useState, useCallback } from "react";
import { createPortal } from "react-dom";
import { DayPicker } from "react-day-picker";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  RiCloseLine,
  RiArrowLeftLine,
  RiArrowLeftSLine,
  RiArrowRightSLine,
  RiVideoLine,
  RiCalendarLine,
  RiTimeLine,
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

type Step = "select" | "form" | "submitting" | "success" | "error";

// ─── react-day-picker classNames ──────────────────────────────────────────────
// Navigation is hidden — we render our own month header above the grid.

const DAY_PICKER_CLASSES = {
  root: "w-full",
  months: "w-full",
  month: "w-full",
  month_caption: "hidden",
  nav: "hidden",
  month_grid: "w-full",
  weekdays: "",
  weekday:
    "pb-2 font-squada-one text-[10px] text-muted/40 tracking-wider text-center uppercase",
  week: "",
  day: "text-center p-px",
  day_button:
    "mx-auto w-8 h-8 flex items-center justify-center font-source-code-pro text-xs text-muted rounded-lg transition-all duration-150 hover:bg-accent/15 hover:text-foreground",
  selected:
    "[&_button]:bg-accent [&_button]:text-foreground [&_button]:hover:bg-accent-light",
  today: "[&_button]:text-accent",
  outside: "[&_button]:opacity-15 [&_button]:pointer-events-none",
  disabled: "[&_button]:opacity-20 [&_button]:pointer-events-none",
  hidden: "invisible",
  focused: "",
} as Record<string, string>;

// ─── Component ────────────────────────────────────────────────────────────────

export default function BookingModal({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  // Start of the current month, used to drive DayPicker navigation
  const [currentMonth, setCurrentMonth] = useState<Date>(() => {
    const d = new Date(today);
    d.setDate(1);
    return d;
  });

  const [step, setStep] = useState<Step>("select");
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

  // ── Month navigation ───────────────────────────────────────────────────────

  const isAtStartMonth =
    currentMonth.getFullYear() === today.getFullYear() &&
    currentMonth.getMonth() === today.getMonth();

  const goToPrevMonth = () => {
    if (isAtStartMonth) return;
    setCurrentMonth((m) => {
      const d = new Date(m);
      d.setMonth(d.getMonth() - 1);
      return d;
    });
  };

  const goToNextMonth = () => {
    setCurrentMonth((m) => {
      const d = new Date(m);
      d.setMonth(d.getMonth() + 1);
      return d;
    });
  };

  const monthLabel = currentMonth.toLocaleDateString("en-GB", {
    month: "long",
    year: "numeric",
  });

  // ── Date selected → fetch slots ────────────────────────────────────────────

  const handleDateSelect = useCallback(async (date: Date | undefined) => {
    if (!date) return;
    setSelectedDate(date);
    setSelectedSlot(null);
    setIsLoadingSlots(true);
    setSlots([]);

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

  // ── Slot selected → advance to form ───────────────────────────────────────

  const handleSlotSelect = (slot: TimeSlot) => {
    setSelectedSlot(slot);
    setStep("form");
  };

  // ── Form submit ────────────────────────────────────────────────────────────

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

  // ── Close & reset ──────────────────────────────────────────────────────────

  const handleClose = () => {
    setStep("select");
    setSelectedDate(undefined);
    setSlots([]);
    setSelectedSlot(null);
    setErrorMessage("");
    setMeetingLink("");
    reset();
    onClose();
  };

  const goBack = () => {
    if (step === "form") {
      setSelectedSlot(null);
      setStep("select");
    } else if (step === "error") {
      setStep("form");
    }
  };

  if (!isOpen || typeof document === "undefined") return null;

  // ── Render ─────────────────────────────────────────────────────────────────

  return createPortal(
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
      onClick={(e) => {
        if (e.target === e.currentTarget) handleClose();
      }}
    >
      {/* Modal shell */}
      <div
        className={[
          "relative w-full bg-surface border border-white/8 rounded-2xl shadow-2xl overflow-hidden",
          "border-t-2 border-t-accent",
          step === "select" ? "max-w-[660px]" : "max-w-md",
        ].join(" ")}
      >
        {/* ════════════════════════════════════════════════════════════════
            STEP: SELECT — header + two-column calendar + time slots
        ════════════════════════════════════════════════════════════════ */}
        {step === "select" && (
          <div>
            {/* Header */}
            <div className="flex items-start justify-between px-6 pt-5 pb-4 border-b border-white/5">
              <div>
                <h2 className="font-russo-one text-base text-foreground leading-tight">
                  Book a Discovery Call
                </h2>
                <div className="flex items-center gap-2.5 mt-2">
                  <span className="flex items-center gap-1.5 font-source-code-pro text-xs text-muted">
                    <RiTimeLine size={11} className="text-accent shrink-0" />
                    30 min
                  </span>
                  <span className="w-px h-3 bg-white/10" />
                  <span className="flex items-center gap-1.5 font-source-code-pro text-xs text-muted">
                    <RiVideoLine size={11} className="text-accent shrink-0" />
                    Video call
                  </span>
                  <span className="w-px h-3 bg-white/10" />
                  <span className="font-source-code-pro text-xs text-muted">
                    WAT / GMT+1
                  </span>
                </div>
              </div>
              <button
                onClick={handleClose}
                className="ml-4 mt-0.5 w-8 h-8 flex items-center justify-center text-muted hover:text-foreground transition-colors rounded-lg hover:bg-white/5 shrink-0"
                aria-label="Close"
              >
                <RiCloseLine size={18} />
              </button>
            </div>

            {/* Two-column body */}
            <div className="flex flex-col sm:flex-row">
              {/* ── Left: calendar ── */}
              <div className="flex-1 min-w-0 px-5 py-5 sm:border-r border-b sm:border-b-0 border-white/5">
                {/* Custom month navigation row */}
                <div className="flex items-center justify-between mb-3">
                  <span className="font-squada-one text-sm text-foreground tracking-wide">
                    {monthLabel}
                  </span>
                  <div className="flex items-center gap-0.5">
                    <button
                      onClick={goToPrevMonth}
                      disabled={isAtStartMonth}
                      aria-label="Previous month"
                      className="w-7 h-7 flex items-center justify-center text-muted hover:text-foreground disabled:opacity-20 disabled:pointer-events-none transition-colors rounded-lg hover:bg-white/5"
                    >
                      <RiArrowLeftSLine size={16} />
                    </button>
                    <button
                      onClick={goToNextMonth}
                      aria-label="Next month"
                      className="w-7 h-7 flex items-center justify-center text-muted hover:text-foreground transition-colors rounded-lg hover:bg-white/5"
                    >
                      <RiArrowRightSLine size={16} />
                    </button>
                  </div>
                </div>

                <div className="booking-cal">
                  <DayPicker
                    mode="single"
                    selected={selectedDate}
                    onSelect={handleDateSelect}
                    month={currentMonth}
                    onMonthChange={setCurrentMonth}
                    disabled={[{ before: today }, { dayOfWeek: [0, 6] }]}
                    hideNavigation
                    classNames={DAY_PICKER_CLASSES}
                  />
                </div>
                <p className="mt-3 font-source-code-pro text-[10px] text-muted/35">
                  Weekdays only · WAT (GMT+1)
                </p>
              </div>

              {/* ── Right: time slots ── */}
              <div className="w-full sm:w-[200px] shrink-0 flex flex-col px-4 py-5">
                {!selectedDate ? (
                  <div className="flex-1 flex items-center justify-center py-10">
                    <p className="font-source-code-pro text-[11px] text-muted/35 text-center leading-relaxed">
                      Pick a date to see available slots
                    </p>
                  </div>
                ) : isLoadingSlots ? (
                  <div className="flex-1 flex items-center justify-center py-10">
                    <div className="w-4 h-4 border-[1.5px] border-accent border-t-transparent rounded-full animate-spin" />
                  </div>
                ) : slots.length === 0 ? (
                  <div className="flex-1 flex flex-col items-center justify-center py-10 gap-3">
                    <p className="font-source-code-pro text-[11px] text-muted/50 text-center leading-relaxed">
                      No slots available<br />on this day.
                    </p>
                    <button
                      onClick={() => {
                        setSelectedDate(undefined);
                        setSlots([]);
                      }}
                      className="font-squada-one text-[10px] text-accent hover:text-accent-light tracking-wider transition-colors uppercase"
                    >
                      Try another date
                    </button>
                  </div>
                ) : (
                  <div className="overflow-y-auto max-h-[280px] space-y-1.5 pr-0.5">
                    {slots.map((slot) => (
                      <button
                        key={slot.start}
                        onClick={() => handleSlotSelect(slot)}
                        className="w-full py-2.5 px-3 rounded-lg font-source-code-pro text-xs whitespace-nowrap transition-all duration-150 text-center bg-background/60 border border-white/8 text-muted hover:border-accent/50 hover:text-foreground hover:bg-accent/10"
                      >
                        {slot.label}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        {/* ════════════════════════════════════════════════════════════════
            STEP: FORM — booking details
        ════════════════════════════════════════════════════════════════ */}
        {step === "form" && (
          <div>
            {/* Header */}
            <div className="flex items-center gap-3 px-6 py-4 border-b border-white/5">
              <button
                onClick={goBack}
                className="text-muted hover:text-foreground transition-colors"
                aria-label="Go back"
              >
                <RiArrowLeftLine size={18} />
              </button>
              <h2 className="font-russo-one text-base text-foreground">
                Your details
              </h2>
              <button
                onClick={handleClose}
                className="ml-auto w-8 h-8 flex items-center justify-center text-muted hover:text-foreground transition-colors rounded-lg hover:bg-white/5"
                aria-label="Close"
              >
                <RiCloseLine size={18} />
              </button>
            </div>

            <div className="px-6 py-6">
              {/* Selected slot summary */}
              {selectedDate && selectedSlot && (
                <div className="flex items-center gap-2 mb-6 px-3 py-2.5 bg-background rounded-lg border border-white/5">
                  <RiCalendarLine size={12} className="text-accent shrink-0" />
                  <span className="font-source-code-pro text-xs text-muted">
                    {selectedDate.toLocaleDateString("en-GB", {
                      weekday: "short",
                      day: "numeric",
                      month: "short",
                    })}
                    {" · "}
                    {selectedSlot.label}
                    {" WAT"}
                  </span>
                </div>
              )}

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                {/* Name */}
                <div>
                  <label className="block font-squada-one text-[10px] tracking-wider text-muted uppercase mb-1.5">
                    Name
                  </label>
                  <input
                    {...register("name")}
                    type="text"
                    placeholder="Jane Smith"
                    className="w-full bg-background border border-white/10 focus:border-accent/40 outline-none text-foreground font-source-code-pro text-sm px-4 py-3 rounded-lg transition-colors placeholder:text-muted/25"
                  />
                  {errors.name && (
                    <p className="mt-1 font-source-code-pro text-xs text-accent/80">
                      {errors.name.message}
                    </p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label className="block font-squada-one text-[10px] tracking-wider text-muted uppercase mb-1.5">
                    Email
                  </label>
                  <input
                    {...register("email")}
                    type="email"
                    placeholder="jane@company.com"
                    className="w-full bg-background border border-white/10 focus:border-accent/40 outline-none text-foreground font-source-code-pro text-sm px-4 py-3 rounded-lg transition-colors placeholder:text-muted/25"
                  />
                  {errors.email && (
                    <p className="mt-1 font-source-code-pro text-xs text-accent/80">
                      {errors.email.message}
                    </p>
                  )}
                </div>

                {/* Notes */}
                <div>
                  <label className="block font-squada-one text-[10px] tracking-wider text-muted uppercase mb-1.5">
                    Notes{" "}
                    <span className="normal-case font-source-code-pro font-normal tracking-normal text-muted/35">
                      (optional)
                    </span>
                  </label>
                  <textarea
                    {...register("notes")}
                    rows={3}
                    placeholder="What would you like to discuss?"
                    className="w-full bg-background border border-white/10 focus:border-accent/40 outline-none text-foreground font-source-code-pro text-sm px-4 py-3 rounded-lg transition-colors placeholder:text-muted/25 resize-none"
                  />
                </div>

                {/* Platform */}
                <div>
                  <label className="block font-squada-one text-[10px] tracking-wider text-muted uppercase mb-2">
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
          </div>
        )}

        {/* ════════════════════════════════════════════════════════════════
            STEP: SUBMITTING
        ════════════════════════════════════════════════════════════════ */}
        {step === "submitting" && (
          <div className="flex flex-col items-center justify-center h-64 gap-4">
            <div className="w-5 h-5 border-[1.5px] border-accent border-t-transparent rounded-full animate-spin" />
            <p className="font-source-code-pro text-sm text-muted">
              Locking in your slot...
            </p>
          </div>
        )}

        {/* ════════════════════════════════════════════════════════════════
            STEP: SUCCESS
        ════════════════════════════════════════════════════════════════ */}
        {step === "success" && (
          <div className="flex flex-col items-center text-center py-12 px-8 gap-5">
            <div className="w-14 h-14 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center">
              <svg
                width="22"
                height="22"
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
                A confirmation email is on its way. Looking forward to chatting.
              </p>
            </div>
            {meetingLink && (
              <a
                href={meetingLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-accent hover:bg-accent-light text-foreground font-squada-one text-sm tracking-widest rounded-xl transition-all duration-200"
              >
                <RiVideoLine size={14} aria-hidden="true" />
                Open Meeting Link
              </a>
            )}
            <button
              onClick={handleClose}
              className="font-squada-one text-xs text-muted/40 hover:text-muted tracking-wider transition-colors"
            >
              Close
            </button>
          </div>
        )}

        {/* ════════════════════════════════════════════════════════════════
            STEP: ERROR
        ════════════════════════════════════════════════════════════════ */}
        {step === "error" && (
          <div className="flex flex-col items-center text-center py-12 px-8 gap-5">
            <div className="w-14 h-14 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center">
              <svg
                width="22"
                height="22"
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
    </div>,
    document.body
  );
}
