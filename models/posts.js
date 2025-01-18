const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const post = new Schema({
    title: String,
    content: String,
    owner: String
});
const Posts = mongoose.model("posts",post);
module.exports = Posts;