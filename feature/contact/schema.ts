import * as z from "zod";

export const contactFormSchema = z.object({
  name: z
    .string("Name is required")
    .max(100, "Name must not exceed 100 characters")
    .trim(),
  email: z
    .email("Please enter a valid email address")
    .min(1, "Email is required")
    .max(254, "Email must not exceed 254 characters")
    .toLowerCase()
    .trim(),
  phone: z.string().optional(),
  message: z
    .string("Message is required")
    .max(1000, "Message must not exceed 1000 characters")
    .trim(),
});

export type ContactFormFieldValues = z.infer<typeof contactFormSchema>;
