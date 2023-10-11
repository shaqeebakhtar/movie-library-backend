import dotenv from "dotenv";
import express, { Express } from "express";
import { router } from "./routes";
import { PORT } from "./config";
import { connectDB, sequelize } from "./lib/db";

dotenv.config();

const app: Express = express();
const port = PORT || 5000;

app.use("/api", router);

// connectDB();

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
