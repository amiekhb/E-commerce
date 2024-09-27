import { Resend } from "resend";
import express, { Request, Response } from "express";

import dotenv from "dotenv";
import cors from "cors";
dotenv.config();

import authRoute from "./routes/auth-route";
import categoryRoute from "./routes/category-route";
import { connectDB } from "./config/db";
import { generateHTMLTemplate } from "./utils/generateHTMLTemplate";
import { sendEmail } from "./utils/send-email";

const PORT: string = process.env.PORT || "";
const MONGO_URI = process.env.MONGO_URI || "";

//express app object uusgeh
const app = express();
const resend = new Resend(process.env.RESEND_API_KEY);

//middlewares //callback function
app.use(express.json());
app.use(cors());
app.use("/api/v1/auth", authRoute);
app.use("/api/v1/categories", categoryRoute);

app.get("/", async (req: Request, res: Response) => {
  const rndOtp = Math.floor(Math.random() * 10000)
    .toString()
    .padStart(4, "0");
  sendEmail("bmisheel1104@gmail.com", rndOtp);

  res.send("Welcome to E-Commerce API Server");
});
connectDB(MONGO_URI);

//server asaah
app.listen(PORT, () => {
  console.log(`Сервер localhost:${PORT} дээр аслаа`);
});
