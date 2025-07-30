// src/types.ts
export type EntryType = "Movie" | "TV Show";

export interface Entry {
  id: string;
  title: string;
  type: EntryType;
  director: string;
  budget: number;
  location: string;
  duration: string;
  year: string;
  genre: string;
  actors: string;
  boxOffice: number;
}

export interface FormEntry extends Omit<Entry, "id"> {}
