import { Id, Doc } from "@/convex/_generated/dataModel";
import { LucideIcon } from "lucide-react";

export interface ItemProps {
  id?: Id<"documents">;
  documentIcon?: string;
  active?: boolean;
  expanded?: boolean;
  isSearch?: boolean;
  level?: number;
  onExpand?: () => void;
  label: string;
  onClick?: () => void;
  icon: LucideIcon;
}

export interface NavbarProps {
  isCollapsed: boolean;
  onResetWidth: () => void;
}

export interface DocumentListProps {
  parentDocumentId?: Id<"documents">;
  level?: number;
  data?: Doc<"documents">[];
}

export interface DocumentIdPageProps {
  params: {
    documentId: Id<"documents">;
  };
}

export interface TitleProps {
  initialData: Doc<"documents">;
};

export interface BannerProps {
  documentId: Id<"documents">;
};

export interface MenuProps {
  documentId: Id<"documents">;
};

export interface PublishProps {
  initialData: Doc<"documents">
};