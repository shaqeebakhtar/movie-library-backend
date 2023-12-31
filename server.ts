import express, { Express } from "express";
import { router } from "./routes";
import { PORT } from "./config";
import { connectDB } from "./lib/db";
import cors from "cors";

const app: Express = express();
const port = PORT || 5000;

const corsOption = {
  origin: [
    "http://localhost:8000",
    "http://localhost:3000",
    "http://localhost:5000",
  ],
};
app.use(cors(corsOption));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api", router);

connectDB();

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
