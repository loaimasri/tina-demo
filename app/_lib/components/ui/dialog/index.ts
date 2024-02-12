"use client";

import * as DialogPrimitive from "@radix-ui/react-dialog";

import { DialogContent } from "./dialog-content";
import { DialogDescription } from "./dialog-description";
import { DialogFooter } from "./dialog-footer";
import { DialogHeader } from "./dialog-header";
import { DialogOverlay } from "./dialog-overlay";
import { DialogTitle } from "./dialog-title";

const Root = DialogPrimitive.Root;

const DialogTrigger = DialogPrimitive.Trigger;

const DialogClose = DialogPrimitive.Close;

export const Dialog = Object.assign(Root, {
  Trigger: DialogTrigger,
  Close: DialogClose,
  Overlay: DialogOverlay,
  Content: DialogContent,
  Header: DialogHeader,
  Footer: DialogFooter,
  Title: DialogTitle,
  Description: DialogDescription,
});
