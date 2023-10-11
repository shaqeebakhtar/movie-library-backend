import { DataTypes } from "sequelize";
import { sequelize } from "../lib/db";

export const Movie = sequelize.define("Movie", {
  movieName: DataTypes.STRING,
  duration: DataTypes.DECIMAL(3, 2),
  durationFormat: DataTypes.STRING,
  ratings: DataTypes.DECIMAL(2, 2),
});
