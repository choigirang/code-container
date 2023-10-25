import express from "express";
import {
  searchPost,
  showPost,
  uploadPost,
} from "../controller/post.controller";

export const postRouter = express.Router();

postRouter.get("/posts/:stack", showPost);

postRouter.get("/search", searchPost);

postRouter.post("/posts", uploadPost);
