const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const comment = new Schema({
    title: String,
    content: String,
    owner: String,
    post: { type: Schema.Types.ObjectId, ref: "posts" }
});
const Comments = mongoose.model("comments",comment);
module.exports = Comments;