import postModel, { IPost } from "../models/posts";
import { Request, Response } from "express";
import BaseController from "./base_controller";
import dotenv from "dotenv";
import OpenAI from "openai";

dotenv.config();

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

  async getAi(req: Request, res: Response) {
    const prompt = req.query.prompt ;
    const openai = new OpenAI();
    try {
      const response = await openai.images.generate({
        prompt: `Generate a high-quality, realistic image of a famous landmark or scenic view in ${prompt}`,
        n: 3, 
        size: "1024x1024", 
      });
      const imageUrls = response.data
      .map((img: { url?: string }) => img.url)
      .filter((url): url is string => !!url);
      res.status(200).json({ urls: imageUrls });
    } catch (error) {
      res.status(400).send(error);
    }
  }
}  
export default new PostsController();
