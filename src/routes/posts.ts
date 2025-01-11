import express from 'express';
import postsContoller from '../controllers/posts';
import { Request, Response } from 'express';

const router = express.Router();

router.get("/posts", (req: Request, res: Response) => {
    postsContoller.getPosts(req, res);
});

router.get("/posts/:post_id", (req: Request, res: Response) => { 
    postsContoller.getPostById(req, res); 
});

router.delete("/posts/:post_id", (req: Request, res: Response) => { 
    postsContoller.deletePost(req, res); 
});

router.post("/posts", (req: Request, res: Response) => {
    postsContoller.addPost(req, res); 
});

router.put("/posts/:post_id", (req: Request, res: Response) => { 
    postsContoller.updatePost(req, res); 
});

export default router;