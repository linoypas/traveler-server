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
const comments_1 = __importDefault(require("../models/comments"));
const posts_1 = __importDefault(require("../models/posts"));
const addComment = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const post_id = req.params.post_id;
        const post = yield posts_1.default.findById(post_id);
        if (!post) {
            return res.status(404).send("Post not found");
        }
        else {
            const comment = yield comments_1.default.create({
                owner: req.body.owner,
                content: req.body.content,
                post: post_id
            });
            return res.status(200).send(comment);
        }
    }
    catch (err) {
        return res.status(400).send(err);
    }
});
const deleteComment = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const post_id = req.params.post_id;
        const comment_id = req.params.comment_id;
        const post = yield posts_1.default.findById(post_id);
        if (!post)
            return res.status(404).send("Post not found");
        else {
            const comment = yield comments_1.default.findByIdAndDelete(comment_id);
            if (!comment) {
                return res.status(404).send("Comment not found");
            }
            else {
                return res.status(200).send(comment);
            }
        }
    }
    catch (err) {
        return res.status(400).send(err);
    }
});
const getCommentById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const comment_id = req.params.comment_id;
        const post_id = req.params.post_id;
        const post = yield posts_1.default.findById(post_id);
        if (!post) {
            return res.status(404).send("Post not found");
        }
        else {
            const comment = yield comments_1.default.findById(comment_id);
            if (!comment) {
                return res.status(404).send("Comment not found");
            }
            else {
                return res.status(200).send(comment);
            }
        }
    }
    catch (err) {
        return res.status(400).send(err);
    }
});
const getComments = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const post_id = req.params.post_id;
        const post = yield posts_1.default.findById(post_id);
        if (!post) {
            return res.status(404).send("Post not found");
        }
        else {
            const comments = yield comments_1.default.find({ post: post_id });
            return res.status(200).send(comments);
        }
    }
    catch (err) {
        return res.status(400).send(err);
    }
});
const updateComment = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const post_id = req.params.post_id;
        const comment_id = req.params.comment_id;
        const post = yield posts_1.default.findById(post_id);
        if (!post) {
            return res.status(404).send("post not found");
        }
        else {
            const comment = yield comments_1.default.findById(comment_id);
            if (comment) {
                comment.owner = req.body.owner;
                comment.content = req.body.content;
                comment.save();
                return res.status(200).send(comment);
            }
            else {
                return res.status(404).send("Comment not found");
            }
        }
    }
    catch (err) {
        return res.status(400).send(err);
    }
});
exports.default = {
    addComment,
    getComments,
    updateComment,
    deleteComment,
    getCommentById
};
//# sourceMappingURL=comments-with-check.js.map