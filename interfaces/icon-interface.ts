import { Doc } from "@/convex/_generated/dataModel";

export interface IconPickerProps {
  onChange: (icon: string) => void;
  children: React.ReactNode;
  asChild?: boolean;
}

export interface ToolbarProps {
  initialData: Doc<"documents">;
  preview?: boolean;
}
