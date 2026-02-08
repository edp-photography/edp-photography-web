"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { CheckCircle2 } from "lucide-react";

export type SuccessDialogProps = React.ComponentProps<typeof Dialog>;

export function SuccessDialog(props: SuccessDialogProps) {
  return (
    <Dialog {...props}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <CheckCircle2 className="mx-auto size-12 text-primary" />
          <DialogTitle className="text-center tracking-widest uppercase">
            Message Sent
          </DialogTitle>
          <DialogDescription className="text-center">
            Thank you! Your message has been sent successfully.
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
