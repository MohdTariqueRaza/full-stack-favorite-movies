import express from "express";
import cors from "cors";
import { PrismaClient } from "@prisma/client";
import entryRoutes from "./routes/movie.routes";
const prisma = new PrismaClient();
const app = express();
const port = process.env.PORT || 5000;
app.use(cors());
app.use(express.json());
// Routes
app.use("/api/movies", entryRoutes);
// Start server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
