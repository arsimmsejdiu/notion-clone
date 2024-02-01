import { Doc, Id } from "@/convex/_generated/dataModel";

export interface DocumentListProps {
    parentDocumentId?: Id<"documents">;
    level?: number;
    data?: Doc<"documents">[];
  }