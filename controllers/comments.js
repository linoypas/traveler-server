const Comments = require('../models/comments');
const Posts = require('../models/posts');

const addComment = async (req, res) => {
    try {
        const post_id=req.params.post_id;
        const post = await Posts.findById(post_id);
        if(!post){
            return res.status(404).send("Post not found");
        } else {
            comment = await Comments.create({
                owner: req.body.owner,
                title: req.body.title,
                content: req.body.content,
                post: post_id
            });
            return res.status(201).send(post);
        }
    } catch (err) {
        return res.status(400).send(err);
    }
};

const getComments = async (req,res) => {
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
const updateComment = async (req,res) => {
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
                comment.title = req.body.title;
                comment.content = req.body.content;
                comment.save();
                return res.status(201).send(comment);
            } else {
                return res.status(404).send("Comment not found");
            }
        } 
    } catch (err) {
        return res.status(400).send(err);
    }
};



module.exports = {
    addComment,
    getComments,
    updateComment
}