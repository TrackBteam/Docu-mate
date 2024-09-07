
import { title } from "process";
import { mutation } from "./_generated/server"; // Ensure the path is correct
import { v } from "convex/values";

// Define the mutation function
export const createDocument = mutation({
  args: { title: v.string() }, // Define the expected argument type
  async handler(ctx, args) {
    // Log the document you're inserting
    console.log('Inserting document:', args.title);
    
    // Insert data into the 'documents' collection
    await ctx.db.insert('documents', { title: args.title });
  }
  
})