"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const posts_1 = __importDefault(require("../models/posts"));
const addPost = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const post = yield posts_1.default.create(req.body);
        res.status(200).send(post);
    }
    catch (err) {
        res.status(400).send(err);
    }
});
const updatePost = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const post_id = req.params.post_id;
    try {
        const post = yield posts_1.default.findById(post_id);
        if (post) {
            post.owner = req.body.owner;
            post.title = req.body.title;
            post.content = req.body.content;
            post.save();
            res.status(200).send(post);
        }
        else {
            res.status(404).send("Page not found");
        }
    }
    catch (err) {
        res.status(400).send(err);
    }
});
const getPosts = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const owner = req.query.owner;
    try {
        if (owner) {
            const post = yield posts_1.default.find({ owner: owner });
            res.status(200).send(post);
        }
        else {
            const post = yield posts_1.default.find();
            res.status(200).send(post);
        }
    }
    catch (err) {
        res.status(400).send(err);
    }
});
const deletePost = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const post_id = req.params.post_id;
    try {
        const post = yield posts_1.default.findByIdAndDelete(post_id);
        if (post) {
            res.status(200).send(post);
        }
        else {
            res.status(404).send("Page not found");
        }
    }
    catch (err) {
        res.status(400).send(err);
    }
});
const getPostById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const post_id = req.params.post_id;
    try {
        const post = yield posts_1.default.findById(post_id);
        if (post) {
            res.status(200).send(post);
        }
        else {
            res.status(404).send("Page not found");
        }
    }
    catch (err) {
        res.status(400).send(err);
    }
});
exports.default = {
    getPosts,
    deletePost,
    getPostById,
    addPost,
    updatePost
};
//# sourceMappingURL=posts.js.map