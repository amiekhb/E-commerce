import express, { Request, Response } from "express";
import dotenv from "dotenv";
dotenv.config();
import authRoute from "./routes/auth-route";
//express app object uusgeh
const PORT = process.env.PORT;
const app = express();
//middlewares
//callback function
app.use("/api/v1/auth", authRoute);

app.get("/", (req: Request, res: Response) => {
  res.send("Welcome to E-Commerce API Server");
});

app.listen(PORT, () => {
  console.log(`Сервер localhost:${PORT} дээр аслаа`);
});
