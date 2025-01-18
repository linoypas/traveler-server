import Comments from '../models/comments';
import Posts from '../models/posts';
import { Request, Response } from 'express';

const addComment = async (req: Request, res: Response) => {
    try {
        const post_id=req.params.post_id;
        const post = await Posts.findById(post_id);
        if(!post){
            return res.status(404).send("Post not found");
        } else {
            const comment = await Comments.create({
                owner: req.body.owner,
                content: req.body.content,
                post: post_id
            });
            return res.status(200).send(comment);
        }
    } catch (err) {
        return res.status(400).send(err);
    }
};
const deleteComment = async (req: Request, res: Response) => {
    try{
        const post_id=req.params.post_id;
        const comment_id=req.params.comment_id;
        const post = await Posts.findById(post_id);
        if(!post)
            return res.status(404).send("Post not found");
        else{
            const comment = await Comments.findByIdAndDelete(comment_id);
            if(!comment){
                return res.status(404).send("Comment not found");
            } else{
                return res.status(200).send(comment);
            } 
        }
    } catch (err) {
        return res.status(400).send(err);
    }
};

const getCommentById = async (req: Request, res: Response) => {
    try{
        const comment_id=req.params.comment_id;
        const post_id=req.params.post_id;
        const post = await Posts.findById(post_id);
        if(!post){
            return res.status(404).send("Post not found");
        } else{
            const comment = await Comments.findById(comment_id);
            if(!comment){
                return res.status(404).send("Comment not found");
            } else{
                return res.status(200).send(comment);
            }
        }
    } catch (err){
        return res.status(400).send(err);
    }
};
const getComments = async (req: Request, res: Response) => {
    try{
        const post_id=req.params.post_id;
        const post = await Posts.findById(post_id);
        if(!post){
            return res.status(404).send("Post not found");
        }
        else{
            const comments = await Comments.find({post:post_id});
            return res.status(200).send(comments);
        }
    } catch (err){
        return res.status(400).send(err);
    }
};

const updateComment = async (req: Request, res: Response) => {
    try {
        const post_id=req.params.post_id;
        const comment_id=req.params.comment_id;
        const post = await Posts.findById(post_id);
        if (!post) {
            return res.status(404).send("post not found");
        } else {
            const comment = await Comments.findById(comment_id);
            if (comment) {
                comment.owner = req.body.owner;
                comment.content = req.body.content;
                comment.save();
                return res.status(200).send(comment);
            } else {
                return res.status(404).send("Comment not found");
            }
        } 
    } catch (err) {
        return res.status(400).send(err);
    }
};



export default {
    addComment,
    getComments,
    updateComment,
    deleteComment,
    getCommentById
}