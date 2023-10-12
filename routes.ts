import { Router } from "express";
import movieController from "./controllers/movie-controller";

export const router = Router();

router.get("/movies", movieController.getMovies);

router.post("/movies", movieController.addMovie);

router.put("/movies/:movieId", movieController.updateMovieById);

router.delete("/movies/:movieId", movieController.deleteMovieById);
