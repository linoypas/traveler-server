import mongoose from "mongoose";
const Schema = mongoose.Schema;

export interface IPost {
    title: string;
    content: string;
    owner: string;
    likes: string[];
}

const post = new Schema<IPost>({
    title: {
        type: String,
        required: true,
      },
    content: {
    type: String,
    required: true,
    }, 
    owner: {
        type: String,
        required: true,
      },  
    likes: { 
      type: [String], 
      default: [],
      unique: true,
    },

    });

const Posts = mongoose.model<IPost>("posts",post);
export default Posts;