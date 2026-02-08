"use client";

import { Button } from "@/components/ui/button";
import { useFormStatus } from "react-dom";

type SubmitButtonProps = Omit<
  React.ComponentProps<typeof Button>,
  "disabled" | "type"
>;

export function SubmitButton({ children, ...props }: SubmitButtonProps) {
  const { pending } = useFormStatus();

  return (
    <Button disabled={pending} type="submit" {...props}>
      {children}
    </Button>
  );
}
