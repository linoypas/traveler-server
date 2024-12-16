const Posts = require('../models/posts');

const addPost = async (req,res) => {
    try{
        const post = await Posts.create(req.body);
        return res.status(201).send(post);
    } catch (err){
        return res.status(400).send(err);
    }
};

const getPosts = async (req,res) => {
    const owner = req.query.owner;
    try{
        if(owner){
            const post = await Posts.find({owner: owner});
            return res.status(200).send(post);
        } else {
            const post = await Posts.find();
            return res.status(200).send(post);
        }
    } catch (err){
        return res.status(400).send(err);
    }
};

const updatePost = async(req,res) => {
    const post_id=req.params.post_id;
    try {
        const post = await Posts.findById(post_id);
        if (post) {
            post.owner = req.body.owner;
            post.title = req.body.title;
            post.content = req.body.content;
            post.save();
            return res.status(201).send(post);
        } else {
            return res.status(404).send("Page not found");
        }
    } catch (err) {
        return res.status(400).send(err);
    }
};

const deletePost = async (req,res) => {
    const post_id=req.params.post_id;
    try{
        const post = await Posts.findByIdAndDelete(post_id);
        if(post){
            return res.status(201).send(post);
        } else{
            return res.status(404).send("Page not found");

        }
    } catch (err){
        return res.status(400).send(err);
    }
};

const getPostById = async (req,res) => {
    const post_id=req.params.post_id;
    try{
        const post = await Posts.findById(post_id);
        if(post){
            return res.status(200).send(post);
        } else{
            return res.status(404).send("Page not found");

        }
    } catch (err){
        return res.status(400).send(err);
    }
};

module.exports = {
    addPost,
    getPosts,
    updatePost,
    deletePost,
    getPostById
}