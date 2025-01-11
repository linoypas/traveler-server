import mongoose from "mongoose";
const Schema = mongoose.Schema;

export interface IComment {
    content: string;
    owner: string;
    post: object;
}
const comment = new Schema<IComment>({
    content: {
        type: String,
        required: true,
      },
    owner: String,
    post: { type: Schema.Types.ObjectId, ref: "posts" }
});
const Comments = mongoose.model<IComment>("comments",comment);

export default Comments;