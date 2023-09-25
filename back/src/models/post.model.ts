import mongoose from "mongoose";
import { PostType } from "../type/schema";

const postSchema = new mongoose.Schema({
  number: {
    type: Number,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  body: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
  stack: {
    type: String,
    required: true,
  },
});

const Post = mongoose.model<PostType>("Post", postSchema);

export default Post;
