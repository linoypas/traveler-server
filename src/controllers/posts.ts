import postModel, { IPost } from "../models/posts";
import { Request, Response } from "express";
import BaseController from "./base_controller";

class PostsController extends BaseController<IPost> {
  constructor() {
    super(postModel);
  }
  async create(req: Request, res: Response) {
    const userId = req.params.userId;
    const post = {
      ...req.body,
      owner: userId,
    };
    req.body = post;
    super.createItem(req, res);
  }
}

export default new PostsController();