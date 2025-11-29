"use client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod"; // or 'zod/v4'

const schema = z.object({
  name: z.string().min(1, { message: "Name is required" }),
  email: z.string().email({ message: "Invalid email address" }),
  subject: z.string().min(1, { message: "Subject is required" }),
  message: z
    .string()
    .min(10, { message: "Message must be at least 10 characters" }),
});

function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });
  return (
    <form
      className="flex flex-col gap-4 sm:gap-5 lg:gap-6 w-full"
      onSubmit={handleSubmit((d) => console.log(d))}
    >
      <div className="flex flex-col lg:flex-row gap-4 sm:gap-3 lg:gap-4">
        <div className="sm:basis-1/2 flex flex-col gap-1.5">
          <label
            htmlFor="name"
            className="pl-1 font-semibold text-sm sm:text-base text-gray-700"
          >
            Your Name *
          </label>
          <input
            id="name"
            type="text"
            placeholder="John Doe"
            className="text-base sm:text-lg lg:text-xl px-3 sm:px-4 py-2.5 sm:py-3 border-2 sm:border-3 border-black rounded-lg focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2 transition-all"
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
            className="pl-1 font-semibold text-sm sm:text-base text-gray-700"
          >
            Email Address *
          </label>
          <input
            id="email"
            type="email"
            placeholder="john@example.com"
            className="text-base sm:text-lg lg:text-xl px-3 sm:px-4 py-2.5 sm:py-3 border-2 sm:border-3 border-black rounded-lg focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2 transition-all"
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
          className="pl-1 font-semibold text-sm sm:text-base text-gray-700"
        >
          Subject *
        </label>
        <input
          id="subject"
          type="text"
          placeholder="Project Inquiry"
          className="text-base sm:text-lg lg:text-xl px-3 sm:px-4 py-2.5 sm:py-3 border-2 sm:border-3 border-black rounded-lg focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2 transition-all"
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
          className="pl-1 font-semibold text-sm sm:text-base text-gray-700"
        >
          Your Message *
        </label>
        <textarea
          id="message"
          placeholder="Tell me about your project..."
          rows={5}
          className="text-base sm:text-lg lg:text-xl px-3 sm:px-4 py-2.5 sm:py-3 border-2 sm:border-3 min-h-32 sm:min-h-40 border-black rounded-lg focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2 transition-all resize-y"
          {...register("message")}
        />
        {errors.message?.message && (
          <p className="text-red-600 text-xs sm:text-sm pl-1">
            {String(errors.message?.message)}
          </p>
        )}
      </div>
      <button
        className="font-bold text-base sm:text-lg lg:text-xl text-white bg-black border-2 sm:border-3 border-black rounded-lg px-6 sm:px-8 py-3 sm:py-3.5 transition-all duration-200 hover:bg-black/90 hover:scale-[1.02] active:scale-[0.98] self-start cursor-pointer"
        type="submit"
      >
        Send Message →
      </button>
    </form>
  );
}

export default ContactForm;
