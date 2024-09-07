'use client';
import { api } from "@/convex/_generated/api";
import { SignInButton, UserButton } from "@clerk/nextjs";
import { Authenticated, Unauthenticated, useMutation } from "convex/react";
import Image from "next/image";
import { title } from "process";

export default function Home() {

  const createDocument = useMutation(api.documents.createDocument);
  return (

    <main className="flex min-h-screen flex-col items-center justify">
      <Unauthenticated>
        <SignInButton/>
      </Unauthenticated>
      <Authenticated>
        <UserButton />
        <button onClick={() => {
      createDocument({ title: 'hello' }); }}> Click Me</button>

      </Authenticated>
    </main>
  );
}
