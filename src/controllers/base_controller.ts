import { Model } from 'mongoose';
import Posts from '../models/posts';
import { Request, Response } from 'express';

class BaseController<T> {
    model: Model<T>;
    constructor(model: Model<T>) {
        this.model=model;
}
async create(req: Request, res: Response) {
    try {
        const item = await this.model.create(req.body);
        return res.status(200).send(item);
    } catch (err) {
        return res.status(400).send(err);
    }
};
async delete(req: Request, res: Response){
    try{
        const item = await this.model.findByIdAndDelete(req.params.id);
        return res.status(200).send(item);
    } catch (err) {
        return res.status(400).send(err);
    }
};

async getById(req: Request, res: Response){
    try{
        const item = await this.model.findById(req.params.id);
        return res.status(200).send(item);
    } catch (err){
        return res.status(400).send(err);
    }
};
const getAll = async (req: Request, res: Response) => {
    const filter=req.query.owner
    try{
        if (filter) {
            const item = await this.model.find({ owner: filter });
            res.send(item);
        } else {
            const items = await this.model.find();
            res.send(items);
        }
    } catch (err){
        return res.status(400).send(err);
    }
};

async update(req: Request, res: Response){
    try {
        const item = await this.model.findById(req.params.id);
        if (item) {
            item.owner = req.body.owner;
            item.title = req.body.title;
            item.content = req.body.content;
            item.save();
            return res.status(200).send(item);
        } else {
            return res.status(404).send("not found");
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