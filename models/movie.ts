import { DataTypes } from "sequelize";
import { sequelize } from "../lib/db";

const Movie = sequelize.define("Movie", {
  movieName: DataTypes.STRING,
  duration: DataTypes.DECIMAL(13, 12),
  durationFormat: DataTypes.STRING,
  ratings: DataTypes.DECIMAL(3, 1),
});

export default Movie;

sequelize.sync();
