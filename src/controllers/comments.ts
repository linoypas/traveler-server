import commentsModel, { IComment } from "../models/comments";
import BaseController from "./base_controller";

const commentController = new BaseController<IComment>(commentsModel);

export default commentController;