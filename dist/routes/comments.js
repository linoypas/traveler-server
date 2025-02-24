"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const comments_1 = __importDefault(require("../controllers/comments"));
const router = express_1.default.Router();
router.post('/posts/:post_id/comments', (req, res) => {
    comments_1.default.addComment(req, res);
});
router.get('/posts/:post_id/comments', (req, res) => {
    comments_1.default.getComments(req, res);
});
router.put('/posts/:post_id/comments/:comment_id', (req, res) => {
    comments_1.default.updateComment(req, res);
});
router.get('/posts/:post_id/comments/:comment_id', (req, res) => {
    comments_1.default.getCommentById(req, res);
});
router.delete('/posts/:post_id/comments/:comment_id', (req, res) => {
    comments_1.default.deleteComment(req, res);
});
exports.default = router;
//# sourceMappingURL=comments.js.map