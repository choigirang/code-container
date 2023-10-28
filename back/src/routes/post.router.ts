import express from "express";
import {
  searchPost,
  showEachPost,
  showPost,
  uploadPost,
} from "../controller/post.controller";

export const postRouter = express.Router();

postRouter.get("/posts/:stack", showPost);

postRouter.get("/post/:number", showEachPost);

postRouter.get("/search", searchPost);

postRouter.post("/posts", uploadPost);
