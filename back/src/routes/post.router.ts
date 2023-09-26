import express from "express";
import { showPost, uploadPost } from "../controller/post.controller";

export const postRouter = express.Router();

postRouter.get("/posts/:stack", showPost);

postRouter.post("/posts", uploadPost);
