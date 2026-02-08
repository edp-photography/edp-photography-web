"use server";

import { Resend } from "resend";
import { z } from "zod";
import { ContactFormFieldValues, contactFormSchema } from "./schema";

const resend = new Resend(process.env.RESEND_API_KEY);

const PHOTOGRAPHER_EMAIL = "info@emanueldellapia.com";
const FROM_EMAIL = process.env.FROM_EMAIL || "onboarding@resend.dev"; // Use your verified domain
const PHOTOGRAPHER_NAME = "Emanuel Della Pia"; // Customize this

export type SendContactFormEmailsActionState = Partial<{
  success: boolean;
  message: string;
  fieldErrors: Record<string, string[]>;
  formErrors: string[];
  serverError: string;
  data: ContactFormFieldValues;
}>;

export async function sendContactFormEmailsAction(
  prevState: SendContactFormEmailsActionState,
  formData: FormData,
): Promise<SendContactFormEmailsActionState> {
  const validation = contactFormSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    phone: formData.get("phone"),
    message: formData.get("message"),
  });

  if (!validation.success) {
    const flattenedErrors = z.flattenError(validation.error);

    return {
      success: false,
      message: "Validation Error",
      fieldErrors: flattenedErrors.fieldErrors,
      formErrors: flattenedErrors.formErrors,
    };
  }

  const { name, email, phone, message } = validation.data;

  try {
    // Send both emails concurrently
    const [notificationResult, confirmationResult] = await Promise.all([
      // Email to photographer
      resend.emails.send({
        from: `${PHOTOGRAPHER_NAME} Website <${FROM_EMAIL}>`,
        to: [PHOTOGRAPHER_EMAIL],
        replyTo: email,
        subject: `New contact form submission from ${name}`,
        text: `You have received a new message from your website contact form.

Name: ${name}
Email: ${email}
Phone: ${phone || "Not provided"}

Message:
${message}

---
You can reply directly to this email to respond to ${name}.`,
      }),

      // Confirmation email to visitor
      resend.emails.send({
        from: `${PHOTOGRAPHER_NAME} <${FROM_EMAIL}>`,
        to: [email],
        subject: `Thank you for reaching out, ${name}!`,
        text: `Hi ${name},

Thank you for getting in touch! We've received your message and will get back to you as soon as possible.

Here's a copy of your message:
"${message}"

Best regards,
${PHOTOGRAPHER_NAME}`,
      }),
    ]);

    // Check for errors in either email
    if (notificationResult.error) {
      console.error("Notification email error:", notificationResult.error);
      return {
        success: false,
        message: "Failed to send notification email",
        serverError: notificationResult.error.message,
      };
    }

    if (confirmationResult.error) {
      console.error("Confirmation email error:", confirmationResult.error);
      // Still return success since the main notification was sent
      // but log the error for debugging
      return {
        success: true,
        message: "Message sent! (confirmation email may be delayed)",
      };
    }

    return {
      success: true,
      message: "Thank you! Your message has been sent successfully.",
    };
  } catch (error) {
    console.error("Contact form error:", error);
    return {
      success: false,
      message: "An unexpected error occurred",
      serverError: error instanceof Error ? error.message : "Unknown error",
    };
  }
}
