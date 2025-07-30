import { Router } from "express";
import {
  createMovie,
  getMovies,
  updateMovie,
  deleteMovie,
} from "../controllers/movie.controller";
const router = Router();
router.post("/", createMovie);
router.get("/", getMovies);
router.put("/:id", updateMovie);
router.delete("/:id", deleteMovie);
export default router;
