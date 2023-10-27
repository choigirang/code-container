import { Request, Response } from "express";
import Post from "../models/post.model";
import { PostType } from "../type/schema";

export async function showPost(req: Request, res: Response) {
  const { stack } = req.params;

  // 숫자가 와도 문자열로 취급
  console.log(stack);
  try {
    if (typeof stack === "number") {
      const numberOfPost = await Post.find({ number: stack }).sort({
        number: -1,
      });

      console.log(1);

      console.log(numberOfPost);
      return res.status(200).json(numberOfPost);
    }
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
  let keyword = req.query.keyword;

  try {
    // 키워드를 포함하는 데이터 검색
    let searchResults;

    if (keyword === "all") {
      searchResults = await Post.find().sort({ postNumber: -1 });
    } else {
      searchResults = await Post.find({
        $or: [
          { title: { $regex: keyword, $options: "i" } },
          { content: { $regex: keyword, $options: "i" } },
        ],
      }).sort({ postNumber: -1 });
    }

    return res.status(200).send(searchResults);
  } catch (err) {
    return res.status(404).send(err);
  }
}

export async function uploadPost(req: Request, res: Response) {
  const { title, stack, htmlContent, prePost } = req.body;
  try {
    if (prePost) {
      // prePost의 number와 일치하는 게시글을 찾습니다.
      const existingPost = await Post.findOne({ number: prePost });
      if (existingPost) {
        // 해당 게시글이 존재하는 경우 데이터를 교체합니다.
        existingPost.title = title;
        existingPost.category = stack;
        existingPost.htmlContent = htmlContent;

        await existingPost.save();
        return res.status(200).json("데이터 전송이 완료되었습니다.");
      }
    } else {
      // prePost가 없을 경우 새로운 게시글을 생성합니다.
      const number = await Post.countDocuments();
      const createdPost = new Post({
        number: number + 1,
        title,
        htmlContent,
        stack,
      });

      await createdPost.save();
      return res.status(200).json("데이터 전송이 완료되었습니다.");
    }
  } catch {
    res.status(400).json("데이터 전송에 실패하였습니다.");
  }
}
