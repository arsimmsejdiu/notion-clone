import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";
const DocumentList = () => {
  const documents = useQuery(api.documents.getSidebar);

  return (
    <div>
      {documents?.map((document: any) => (
        <p key={document._id}>{document.title}</p>
      ))}
    </div>
  );
};

export default DocumentList;
