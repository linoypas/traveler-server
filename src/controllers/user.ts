import userModel, { IUser } from "../models/users";
import { Request, Response } from "express";
import BaseController from "./base_controller";

class UserController extends BaseController<IUser> {
  constructor() {
    super(userModel);
  }

}

export default new UserController();