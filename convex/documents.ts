
import { title } from "process";
import { mutation } from "./_generated/server"; // Ensure the path is correct
import { v } from "convex/values";

// Define the mutation function
export const createDocument = mutation({
  args: { title: v.string() }, // Define the expected argument type
  async handler(ctx, args) {
    // Insert data into the 'documents' collection
    try {
      await ctx.db.insert('documents', { title: args.title });
    } catch (error) {
      // Handle any errors that occur during insertion
      console.error('Error inserting document:', error);
      throw new Error('Failed to create document');
    }
  },
});
