"use client";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

import { ConfirmModalProps } from "@/interfaces/modals-interface";

export const ConfirmModal = ({children, onConfirm}: ConfirmModalProps) => {
    const handleConfirm = (event: React.MouseEvent<HTMLDListElement, MouseEvent>) => {
        event.stopPropagation();
        onConfirm();
    }

    return (
        <AlertDialog>
            <AlertDialogTrigger onClick={(e) => e.stopPropagation()} asChild>
                {children}
            </AlertDialogTrigger>
            <AlertDialogContent>
                
            </AlertDialogContent>
        </AlertDialog>
    )
}
