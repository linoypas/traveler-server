import express, { Express } from 'express';
import dontenv from 'dotenv';
dontenv.config();
import mongoose from 'mongoose';
import bodyParser from "body-parser";
import PostsRoutes from "./routes/posts";
import CommentsRoutes from "./routes/comments";

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use("/",PostsRoutes)
app.use("/", CommentsRoutes);

const db = mongoose.connection;
db.on("error", console.error.bind(console,"connection error:"));
db.once("open",function () {
  console.log("conncted to database")
});

const initApp = () =>  {
  return new Promise<Express>((resolve, reject) => {
    if (!process.env.DB_CONNECT) {
      reject(new Error('DB_CONNECT is not defined'));
    } else{
      mongoose
      .connect(process.env.DB_CONNECT).then(() => {
        resolve(app);
      })
      .catch((err) => { 
        reject(err);
      });
    }
  });
};
export default initApp;