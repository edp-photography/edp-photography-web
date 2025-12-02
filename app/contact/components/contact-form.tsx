"use client";

import { FormInput } from "@/components/form/form-input";
import { FormTextarea } from "@/components/form/form-textarea";
import { Button } from "@/components/ui/button";
import { FieldGroup } from "@/components/ui/field";
import { ContactFieldValues, useContactForm } from "../hooks/use-contact-form";

export function ContactForm() {
  const contactForm = useContactForm();

  function onSubmitValid(data: ContactFieldValues) {
    console.log(JSON.stringify(data));
  }

  return (
    <form id="contact-form" onSubmit={contactForm.handleSubmit(onSubmitValid)}>
      <FieldGroup>
        <FormInput
          control={contactForm.control}
          name="name"
          type="text"
          label="Name"
          placeholder="John Doe"
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
      <div className="flex justify-end mt-7">
        <Button type="submit">SEND</Button>
      </div>
    </form>
  );
}
