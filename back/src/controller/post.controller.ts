import { Request, Response } from "express";
import Post from "../models/post.model";

export async function showPost(req: Request, res: Response) {
  const { stack } = req.params;

  try {
    const post = await Post.find({ stack });
    const allPost = await Post.find();

    if (stack === "all") {
      return res.status(200).json(allPost);
    }
    res.status(200).json(post);
  } catch (err) {
    res.status(404).json(err);
  }
}

export async function uploadPost(req: Request, res: Response) {}
