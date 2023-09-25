import express, { Express, Request, Response } from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import { postRouter } from "./routes/post.router";

dotenv.config();

const server = process.env.SERVER_NAME;
const password = process.env.SERVER_PASS;

const app: Express = express();
const port = 8080;

app.use(cors({ origin: true, credentials: true }));
app.use(express.json());
app.get("/", (req: Request, res: Response) => {
  res.send("Typescript + Node.js + Express Server");
});
app.use(postRouter);

app.listen(port, () => {
  console.log(`[server]: Server is running at <https://localhost>:${port}`);
});

mongoose
  .connect(
    `mongodb+srv://${server}:${password}@code-container.sslshgw.mongodb.net/`
  )
  .then(() => console.log("connected successfully"))
  .catch((err: Error) => console.log(err));
