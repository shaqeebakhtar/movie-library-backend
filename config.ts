import dotenv from "dotenv";
dotenv.config();

export const DB_USER: string = process.env.DB_USER as string;
export const DB_PASS: string = process.env.DB_PASS as string;
export const DATABASE: string = process.env.DATABASE as string;
export const PORT = parseInt(process.env.PORT!);
