'use client';
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/ui/mode-toggle";
import { api } from "@/convex/_generated/api";
import { SignInButton, UserButton } from "@clerk/nextjs";
import { Authenticated, Unauthenticated, useMutation, useQuery } from "convex/react";
import { DocumentCard } from "./document-card";

export default function Home() {
  const documents=useQuery(api.documents.getDocuments)
  const createDocument = useMutation(api.documents.createDocument); // Using the mutation

  return (
    <main className="p-24">
      <h1 className="text-4xl font-bold">My Document</h1>
   
       
 
        <Button className="my-[250px]" onClick={() => {
          createDocument({ title: 'hello' }); // Trigger mutation on click
         
        }}>
         Upload Document
        </Button>

        <div className="grid grid-cols-4">{documents?.map((doc) => <DocumentCard
        document={doc}/>
        )
        }
        </div>

    </main>
  );
}
