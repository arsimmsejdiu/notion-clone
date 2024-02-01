"use client";

import Image from "next/image";
import { useUser } from "@clerk/clerk-react";
import { PlusCircle } from "lucide-react";
import { useMutation } from "convex/react";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";
import { Empty, EmptyDark } from "@/assets";

const DocumentsPage = () => {
  const router = useRouter();
  const { user } = useUser();
//TODO: const create = useMutation(api.documents.create);

// TODO: const onCreate = () => {}

  return (
    <div className="h-full flex flex-col items-center justify-center space-y-4">
      <Image
        src={Empty}
        height="300"
        width="300"
        alt="Empty"
        className="dark:hidden"
      />
      <Image
        src={EmptyDark}
        height="300"
        width="300"
        alt="Empty"
        className="hidden dark:block"
      />
      <h2 className="text-lg font-medium">
        Welcome to {user?.firstName}&apos;s Jotion
      </h2>
      <Button onClick={() => {}}>
        <PlusCircle className="h-4 w-4 mr-2" />
        Create a note
      </Button>
    </div>
  );
};

export default DocumentsPage;
