'use client';
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/ui/mode-toggle";
import { api } from "@/convex/_generated/api";
import { SignInButton, UserButton } from "@clerk/nextjs";
import { Authenticated, Unauthenticated, useMutation, useQuery } from "convex/react";

export default function Home() {
  const documents=useQuery(api.documents.getDocuments)
  const createDocument = useMutation(api.documents.createDocument); // Using the mutation

  return (
    <main className="flex min-h-screen flex-col items-center justify">
      <Unauthenticated>
       
        <SignInButton />
      </Unauthenticated>
      <Authenticated>
        <UserButton />
        <ModeToggle/> 
        <Button onClick={() => {
          createDocument({ title: 'hello' }); // Trigger mutation on click
          console.log('Button clicked, creating document with title: hello'); // Log the click event
        }}>
          Click Me
        </Button>

        {documents?.map((doc) => (
          <div key={doc._id}>{doc.title}</div>
        ))
        }
      </Authenticated>
    </main>
  );
}
