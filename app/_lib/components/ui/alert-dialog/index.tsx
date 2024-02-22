"use client";

import * as AlertDialogPrimitive from "@radix-ui/react-alert-dialog";

import { AlertDialogAction } from "./aler-dialog-action";
import { AlertDialogCancel } from "./alert-dialog-cancel";
import { AlertDialogContent } from "./alert-dialog-content";
import { AlertDialogDescription } from "./alert-dialog-description";
import { AlertDialogFooter } from "./alert-dialog-footer";
import { AlertDialogHeader } from "./alert-dialog-header";
import { AlertDialogOverlay } from "./alert-dialog-overlay";
import { AlertDialogSeparator } from "./alert-dialog-separator";
import { AlertDialogTitle } from "./alert-dialog-title";

const { Root, Trigger } = AlertDialogPrimitive;

export const AlertDialog = Object.assign(Root, {
  Overlay: AlertDialogOverlay,
  Trigger,
  Content: AlertDialogContent,
  Header: AlertDialogHeader,
  Footer: AlertDialogFooter,
  Title: AlertDialogTitle,
  Separator: AlertDialogSeparator,
  Description: AlertDialogDescription,
  Action: AlertDialogAction,
  Cancel: AlertDialogCancel,
});
