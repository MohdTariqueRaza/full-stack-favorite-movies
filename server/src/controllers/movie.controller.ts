import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import {
  createEntrySchema,
  updateEntrySchema,
} from "../validations/movie.validation";
const prisma = new PrismaClient();

// Create movie

export const createMovie = async (req: Request, res: Response) => {
  try {
    const data = createEntrySchema.parse(req.body);
    const movie = await prisma.movie.create({
      data,
    });
    res.status(201).json(movie);
  } catch (error) {
    const err = error as any;
    const messages = (() => {
      try {
        return JSON.parse(err.message).map((e: any) => e.message);
      } catch {
        return [err.message];
      }
    })();

    res.status(400).json({ error: messages });
  }
};

// Get all movies

export const getMovies = async (req: Request, res: Response) => {
  const page = parseInt(req.query.page as string) || 1;
  const limit = parseInt(req.query.limit as string) || 10;
  const skip = (page - 1) * limit;
  try {
    const movies = await prisma.movie.findMany({
      skip,
      take: limit,
      orderBy: {
        createdAt: "desc",
      },
    });
    const total = await prisma.movie.count();
    const hasMore = skip + limit < total;
    res.json({
      movies,
      page,
      limit,
      total,
      hasMore,
    });
  } catch (error) {
    const err = error as Error;
    res.status(500).json({ error: err.message });
  }
};

// Update movie

export const updateMovie = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const data = updateEntrySchema.parse(req.body);
    const entry = await prisma.movie.update({
      where: { id: parseInt(id) },
      data,
    });
    res.json(entry);
  } catch (error) {
    const err = error as any;
    const messages = (() => {
      try {
        return JSON.parse(err.message).map((e: any) => e.message);
      } catch {
        return [err.message];
      }
    })();

    res.status(400).json({ error: messages });
  }
};

// Delete movie

export const deleteMovie = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    await prisma.movie.delete({
      where: { id: parseInt(id) },
    });
    res.status(204).send();
  } catch (error) {
    const err = error as Error;
    res.status(400).json({ error: err.message });
  }
};
