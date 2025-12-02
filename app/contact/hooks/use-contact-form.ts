"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

const contactSchema = z.object({
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

export type ContactFieldValues = z.infer<typeof contactSchema>;

export function useContactForm() {
  return useForm({
    resolver: zodResolver(contactSchema),
  });
}
