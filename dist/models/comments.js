"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const Schema = mongoose_1.default.Schema;
const comment = new Schema({
    content: {
        type: String,
        required: true,
    },
    owner: String,
    post: { type: Schema.Types.ObjectId, ref: "posts" }
});
const Comments = mongoose_1.default.model("comments", comment);
exports.default = Comments;
//# sourceMappingURL=comments.js.map