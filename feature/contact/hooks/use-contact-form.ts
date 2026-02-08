"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { contactFormSchema } from "../schema";

export function useContactForm() {
  return useForm({
    resolver: zodResolver(contactFormSchema),
  });
}
