import { Request, Response } from "express";
import Post from "../models/post.model";

export async function showPost(req: Request, res: Response) {
  const { stack } = req.params;

  try {
    const post = await Post.find({ stack }).sort({ number: -1 });
    const allPost = await Post.find().sort({ number: -1 });

    if (stack === "all") {
      return res.status(200).json(allPost);
    }
    res.status(200).json(post);
  } catch (err) {
    res.status(404).json(err);
  }
}

export async function searchPost(req: Request, res: Response) {
  const keyword = req.query.keyword;

  try {
    // 키워드를 포함하는 데이터 검색
    const searchPostResults = await Post.find({
      $or: [
        { title: { $regex: keyword, $options: "i" } },
        { content: { $regex: keyword, $options: "i" } },
      ],
    }).sort({ postNumber: -1 });

    return res.status(200).send(searchPostResults);
  } catch (err) {
    return res.status(404).send(err);
  }
}

export async function uploadPost(req: Request, res: Response) {
  const { title, stack, htmlContent } = req.body;

  try {
    const number = await Post.countDocuments();

    const createdPost = new Post({
      number: number + 1,
      title,
      htmlContent,
      stack,
    });

    await createdPost.save();
    return res.status(200).json("데이터 전송이 완료되었습니다.");
  } catch {
    res.status(400).json("데이터 전송에 실패하였습니다.");
  }
}
