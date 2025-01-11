import Posts, {IPost} from '../models/posts';
import { Request, Response } from 'express';

const addPost = async (req: Request, res: Response) => {
    try{
        const post = await Posts.create(req.body);
        res.status(200).send(post);
    } catch (err){
        res.status(400).send(err);
    }
};

const updatePost = async (req: Request, res: Response) => {
    const post_id=req.params.post_id;
    try {
        const post = await Posts.findById(post_id);
        if (post) {
            post.owner = req.body.owner;
            post.title = req.body.title;
            post.content = req.body.content;
            post.save();
            res.status(200).send(post);
        } else {
            res.status(404).send("Page not found");
        }
    } catch (err) {
        res.status(400).send(err);
    }
};

const getPosts = async (req: Request, res: Response) => {
    const owner = req.query.owner;
    try{
        if(owner){
            const post = await Posts.find({owner: owner});
            res.status(200).send(post);
        } else {
            const post = await Posts.find();
            res.status(200).send(post);
        }
    } catch (err){
        res.status(400).send(err);
    }
};


const deletePost = async (req: Request, res: Response) => {
    const post_id=req.params.post_id;
    try{
        const post = await Posts.findByIdAndDelete(post_id);
        if(post){
            res.status(200).send(post);
        } else{
            res.status(404).send("Page not found");

        }
    } catch (err){
        res.status(400).send(err);
    }
};

const getPostById = async (req: Request, res: Response) => {
    const post_id=req.params.post_id;
    try{
        const post = await Posts.findById(post_id);
        if(post){
            res.status(200).send(post);
        } else{
            res.status(404).send("Page not found");

        }
    } catch (err){
        res.status(400).send(err);
    }
};

export default {
    getPosts,
    deletePost,
    getPostById,
    addPost,
    updatePost
}