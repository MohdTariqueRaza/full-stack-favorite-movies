import { z } from "zod";

const durationRegex = /^((\d{1,2}h)?(\d{1,2}m)?)$/;

const entrySchema = z.object({
  title: z.string().min(1, "Title is required"),
  type: z.enum(["Movie", "TV Show"]),
  director: z.string().min(1, "Director is required"),
  actors: z.string().min(1, "Actors are required"),
  genre: z.string().min(1, "Genre is required"),
  budget: z.number().positive("Budget must be a positive number"),
  boxOffice: z.number().positive("BoxOffice must be a positive number"),
  location: z.string().min(1, "Location is required"),

  duration: z
    .string()
    .regex(durationRegex, "Duration must be in format like 2h3m, 2h, or 45m"),

  year: z
    .string()
    .min(4, "Year is required")
    .regex(/^\d+$/, "Year must be numeric"),
});

export const createEntrySchema = entrySchema;
export const updateEntrySchema = entrySchema.partial();
