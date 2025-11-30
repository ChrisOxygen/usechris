"use server";

import { Resend } from "resend";
import { FormData } from "../components/ContactForm";
import ContactFormEmail from "@/emails/contact-form-email";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendContactFormEmail(data: FormData) {
  try {
    // validate required fields
    const { name, email, message } = data;
    if (!name || !email || !message) {
      throw new Error("Name, message and email are required");
    }
    // Send the welcome email
    await resend.emails.send({
      from: `${data.name} <new-contact@notifications.usechris.dev>`,
      to: "chris@usechris.dev",
      subject: "New Message (useChris.dev)",
      react: ContactFormEmail({
        name: data.name,
        email: data.email,
        subject: data.subject,
        message: data.message,
      }),
    });

    return {
      ok: true,
      message: "Email sent successfully",
    };
  } catch (error) {
    console.error("Error sending welcome email:", error);
    return {
      ok: false,
      message: "Failed to send welcome email",
    };
  }
}
