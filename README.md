This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Initializing convex

Go to convex docs and install the convex package . Next, run npx convex dev .

## Setting Up Clerk Authentication in Next.js

1. Install Dependencies:

````bash

npm install @clerk/nextjs convex 2. Configure Environment Variables: Add the following to your .env.local file:

```bash

NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
NEXT_PUBLIC_CONVEX_URL=https://your-convex-url.convex.cloud

3. Create a Providers Component: In app/providers.tsx </br>
4. Wrap Your App: Modify app/layout.tsx <br>
5. Use Clerk Components in app/page.tsx
6. start your server

## Issues Handling

# Resolving Mutation Issues

Whenever you make changes to your Convex backend, remember to run npx convex codegen to regenerate the API files so that your frontend recognizes the updates.
This setup ensures that Convex mutations are properly connected to your frontend and works smoothly with Clerk for authentication.













````
