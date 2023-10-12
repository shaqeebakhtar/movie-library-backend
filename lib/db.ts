import { Sequelize } from "sequelize";
import { DATABASE, DB_PASS, DB_USER } from "../config";

export const sequelize = new Sequelize(DATABASE, DB_USER, DB_PASS, {
  host: "localhost",
  dialect: "mysql",
  port: 3306,
});

export const connectDB = async () => {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};
