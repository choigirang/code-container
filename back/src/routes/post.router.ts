import express from "express";
import { showPost } from "../controller/post.controller";

export const postRouter = express.Router();

postRouter.get("/posts/:stack", showPost);
