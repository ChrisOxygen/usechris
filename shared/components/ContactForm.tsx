"use client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod"; // or 'zod/v4'
import { sendContactFormEmail } from "../actions/email.action";

const schema = z.object({
  name: z.string().min(1, { message: "Name is required" }),
  email: z.email({ message: "Invalid email address" }),
  subject: z.string().min(1, { message: "Subject is required" }),
  message: z
    .string()
    .min(10, { message: "Message must be at least 10 characters" }),
});

export type FormData = z.infer<typeof schema>;

function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: {
      errors,
      isSubmitSuccessful,
      isSubmitting,
      isValidating,
      submitCount,
    },
    reset,
    setError,
  } = useForm({
    resolver: zodResolver(schema),
  });

  const disabled =
    isSubmitting || isValidating || (submitCount > 2 && isSubmitSuccessful);

  const onSubmit = async (data: FormData) => {
    console.log("Form Data Submitted:", data);
    try {
      const response = await sendContactFormEmail(data);

      if (response.ok) {
        reset(
          {
            name: "",
            email: "",
            subject: "",
            message: "",
          },
          {
            keepErrors: false,
            keepDirty: false,
            keepIsSubmitted: true,
            keepTouched: false,
            keepIsValid: false,
            keepSubmitCount: true,
          }
        );
      }
    } catch (e) {
      console.error("Error submitting form:", e);
      setError("root", {
        type: "manual",
        message: "Failed to send email. Please try again later.",
      });
    }
  };
  return (
    <form
      className="flex flex-col gap-4 sm:gap-5 lg:gap-6 w-full"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="flex flex-col lg:flex-row gap-4 sm:gap-3 lg:gap-4">
        <div className="sm:basis-1/2 flex flex-col gap-1.5">
          <label
            htmlFor="name"
            className="pl-1 font-semibold text-sm sm:text-base text-gray-700 dark:text-gray-300"
          >
            Your Name *
          </label>
          <input
            id="name"
            type="text"
            placeholder="John Doe"
            disabled={disabled}
            className="text-base sm:text-lg lg:text-xl px-3 sm:px-4 py-2.5 sm:py-3 border-2 sm:border-3 border-black dark:border-white dark:bg-black dark:text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white focus:ring-offset-2 dark:focus:ring-offset-black transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            {...register("name")}
          />
          {errors.name?.message && (
            <p className="text-red-600 text-xs sm:text-sm pl-1">
              {String(errors.name?.message)}
            </p>
          )}
        </div>
        <div className="sm:basis-1/2 flex flex-col gap-1.5">
          <label
            htmlFor="email"
            className="pl-1 font-semibold text-sm sm:text-base text-gray-700 dark:text-gray-300"
          >
            Email Address *
          </label>
          <input
            id="email"
            type="email"
            placeholder="john@example.com"
            disabled={disabled}
            className="text-base sm:text-lg lg:text-xl px-3 sm:px-4 py-2.5 sm:py-3 border-2 sm:border-3 border-black dark:border-white dark:bg-black dark:text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white focus:ring-offset-2 dark:focus:ring-offset-black transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            {...register("email")}
          />
          {errors.email?.message && (
            <p className="text-red-600 text-xs sm:text-sm pl-1">
              {String(errors.email?.message)}
            </p>
          )}
        </div>
      </div>
      <div className="flex flex-col gap-1.5">
        <label
          htmlFor="subject"
          className="pl-1 font-semibold text-sm sm:text-base text-gray-700 dark:text-gray-300"
        >
          Subject *
        </label>
        <input
          id="subject"
          type="text"
          placeholder="Project Inquiry"
          disabled={disabled}
          className="text-base sm:text-lg lg:text-xl px-3 sm:px-4 py-2.5 sm:py-3 border-2 sm:border-3 border-black dark:border-white dark:bg-black dark:text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white focus:ring-offset-2 dark:focus:ring-offset-black transition-all disabled:opacity-50 disabled:cursor-not-allowed"
          {...register("subject")}
        />
        {errors.subject?.message && (
          <p className="text-red-600 text-xs sm:text-sm pl-1">
            {String(errors.subject?.message)}
          </p>
        )}
      </div>
      <div className="flex flex-col gap-1.5">
        <label
          htmlFor="message"
          className="pl-1 font-semibold text-sm sm:text-base text-gray-700 dark:text-gray-300"
        >
          Your Message *
        </label>
        <textarea
          id="message"
          placeholder="Tell me about your project..."
          rows={5}
          disabled={disabled}
          className="text-base sm:text-lg lg:text-xl px-3 sm:px-4 py-2.5 sm:py-3 border-2 sm:border-3 min-h-32 sm:min-h-40 border-black dark:border-white dark:bg-black dark:text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white focus:ring-offset-2 dark:focus:ring-offset-black transition-all resize-y disabled:opacity-50 disabled:cursor-not-allowed"
          {...register("message")}
        />
        {errors.message?.message && (
          <p className="text-red-600 text-xs sm:text-sm pl-1">
            {String(errors.message?.message)}
          </p>
        )}
      </div>
      {isSubmitSuccessful ? (
        <div className="text-center py-6 sm:py-8">
          <p className="text-2xl sm:text-3xl lg:text-4xl font-bold text-black dark:text-white">
            Form Submitted Successfully! ✓
          </p>
        </div>
      ) : (
        <button
          disabled={disabled}
          className="font-bold text-base sm:text-lg lg:text-xl text-white dark:text-black bg-black dark:bg-white border-2 sm:border-3 border-black dark:border-white rounded-lg px-6 sm:px-8 py-3 sm:py-3.5 transition-all duration-200 hover:bg-black/90 dark:hover:bg-white/90 hover:scale-[1.02] active:scale-[0.98] self-start cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
          type="submit"
        >
          {isSubmitting || isValidating ? "Sending..." : " Send Message →"}
        </button>
      )}
      {errors.root?.message && (
        <p className="text-red-600 text-sm sm:text-base font-semibold">
          {String(errors.root.message)}
        </p>
      )}
    </form>
  );
}

export default ContactForm;
