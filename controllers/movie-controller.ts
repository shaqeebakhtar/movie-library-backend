import { Request, Response } from "express";
import { addMovieSchema } from "../validators/add-movie";
import Movie from "../models/movie";

class MovieController {
  async getMovies(req: Request, res: Response) {
    const page = req.query.page as string;
    const { count, rows: moviesList } = await Movie.findAndCountAll({
      limit: 10,
      order: [["createdAt", "desc"]],
      offset: page ? parseInt(page) * 10 : 0,
    });

    return res.status(200).json({ moviesList, count });
  }

  async getMovieById(req: Request, res: Response) {
    const { movieId } = req.params;
    const movie = await Movie.findOne({
      where: {
        id: movieId,
      },
    });

    return res.status(200).json(movie);
  }

  async addMovie(req: Request, res: Response) {
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

  async updateMovieById(req: Request, res: Response) {
    const { movieId } = req.params;
    const { movieName, duration, durationFormat, ratings } =
      addMovieSchema.parse(req.body);

    if (!movieName || !duration || !durationFormat || !ratings)
      return res.status(400).json({ message: "All fields are required!" });

    const updatedMovie = await Movie.update(
      {
        movieName,
        duration,
        durationFormat,
        ratings,
      },
      {
        where: {
          id: movieId,
        },
      }
    );

    return res.status(200).json(updatedMovie);
  }

  async deleteMovieById(req: Request, res: Response) {
    const { movieId } = req.params;

    const deletedMovie = await Movie.destroy({
      where: {
        id: movieId,
      },
    });

    return res.status(200).json(deletedMovie);
  }
}

export default new MovieController();
