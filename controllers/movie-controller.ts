import { Request, Response } from "express";
import { addMovieSchema } from "../validators/add-movie";
import Movie from "../models/movie";
import { sequelize } from "../lib/db";

class MovieController {
  async getMovies(req: Request, res: Response) {
    const moviesList = await Movie.findAll();

    return res.status(200).json(moviesList);
  }

  async addMovie(req: Request, res: Response) {
    sequelize.sync();
    const { movieName, duration, durationFormat, ratings } =
      addMovieSchema.parse(req.body);

    if (!movieName || !duration || !durationFormat || !ratings)
      return res.status(400).json({ message: "All fields are required!" });

    const addedMovie = await Movie.create({
      movieName,
      duration,
      durationFormat,
      ratings,
    });

    return res.status(200).json(addedMovie);
  }

  async updateMovieById(req: Request, res: Response) {}

  async deleteMovieById(req: Request, res: Response) {}
}

export default new MovieController();
