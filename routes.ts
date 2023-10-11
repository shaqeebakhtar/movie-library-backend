import { Request, Response, Router } from "express";

export const router = Router();

router.get("/movies", async (req: Request, res: Response) => {});

router.post("/movies", async (req: Request, res: Response) => {});

router.put("/movies/:movieId", async (req: Request, res: Response) => {});

router.delete("/movies/:movieId", async (req: Request, res: Response) => {});
