import postModel, { IPost } from "../models/posts";
import { Request, Response } from "express";
import BaseController from "./base_controller";

class PostsController extends BaseController<IPost> {
  constructor() {
    super(postModel);
  }

  async create(req: Request, res: Response) {
    const userId = "67c218719d6efca5a2ed6bca";
    //req.params.userId;
    const post = {
      ...req.body,
      owner: userId,
    };
    req.body = post;
    console.log(post)
    super.createItem(req, res);
  }
}

export default new PostsController();