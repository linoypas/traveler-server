"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const posts_1 = __importDefault(require("../controllers/posts"));
const router = express_1.default.Router();
router.get("/posts", (req, res) => {
    posts_1.default.getPosts(req, res);
});
router.get("/posts/:post_id", (req, res) => {
    posts_1.default.getPostById(req, res);
});
router.delete("/posts/:post_id", (req, res) => {
    posts_1.default.deletePost(req, res);
});
router.post("/posts", (req, res) => {
    posts_1.default.addPost(req, res);
});
router.put("/posts/:post_id", (req, res) => {
    posts_1.default.updatePost(req, res);
});
exports.default = router;
//# sourceMappingURL=posts.js.map