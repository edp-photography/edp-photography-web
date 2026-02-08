"use client";

import { FormInput } from "@/components/form/form-input";
import { FormTextarea } from "@/components/form/form-textarea";
import { SubmitButton } from "@/components/form/submit-button";
import { FieldError, FieldGroup } from "@/components/ui/field";
import { useActionState, useState } from "react";
import {
  type SendContactFormEmailsActionState,
  sendContactFormEmailsAction,
} from "../actions";
import { useContactForm } from "../hooks/use-contact-form";
import { SuccessDialog } from "./success-dialog";

export function ContactForm() {
  const contactForm = useContactForm();
  const [state, action] = useActionState<
    SendContactFormEmailsActionState,
    FormData
  >(sendContactFormEmailsAction, {});
  const [dialogOpen, setDialogOpen] = useState(false);
  const [lastSuccessState, setLastSuccessState] = useState(false);

  // Open dialog when success changes from false to true
  if (state.success === true && state.success !== lastSuccessState) {
    setLastSuccessState(true);
    setDialogOpen(true);
    contactForm.reset();
  } else if (state.success !== true && lastSuccessState) {
    setLastSuccessState(false);
  }

  // Determine error message to display
  const errorMessage =
    state.serverError ||
    (state.formErrors && state.formErrors.length > 0
      ? state.formErrors[0]
      : undefined) ||
    (!state.success && state.message ? state.message : undefined);

  const onSubmit = (data: Record<string, string>) => {
    const formData = new FormData();
    Object.entries(data).forEach(([key, value]) => {
      formData.append(key, value);
    });
    action(formData);
  };

  return (
    <>
      <form id="contact-form" onSubmit={contactForm.handleSubmit(onSubmit)}>
        <FieldGroup>
          <FormInput
            control={contactForm.control}
            name="name"
            type="text"
            label="Name"
            autoComplete="name"
          />
          <FormInput
            control={contactForm.control}
            name="email"
            type="text"
            label="Email"
            autoComplete="email"
          />
          <FormInput
            control={contactForm.control}
            name="phone"
            type="tel"
            label="Phone"
            description="Include country code for international numbers"
            autoComplete="tel"
          />
          <FormTextarea
            control={contactForm.control}
            name="message"
            label="Message"
            rows={5}
          />
        </FieldGroup>
        <div className="flex flex-col items-end gap-3 mt-7">
          {errorMessage && (
            <div className="w-full">
              <FieldError>{errorMessage}</FieldError>
            </div>
          )}
          <SubmitButton>SEND</SubmitButton>
        </div>
      </form>
      <SuccessDialog open={dialogOpen} onOpenChange={setDialogOpen} />
    </>
  );
}
