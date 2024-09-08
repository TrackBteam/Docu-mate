
import { title } from "process";
import { mutation , query } from "./_generated/server"; // Ensure the path is correct
import { v } from "convex/values";

export const getDocuments = query({async handler(ctx) {
  return await ctx.db.query('documents').collect()},
})
                 
// Define the mutation function
export const createDocument = mutation({
  args: { title: v.string() },
  async handler(ctx, args) {
    console.log('Inserting document:', args.title); // Log the title being inserted
    
    await ctx.db.insert('documents', { title: args.title });
  }
});

