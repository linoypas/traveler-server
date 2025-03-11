import path from "path";
import multer, { FileFilterCallback } from "multer";
import { Request } from "express";

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/"); 
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});


const uploadMiddleware = multer({
    storage: storage,
    limits: { fileSize: 50 * 1024 * 1024 }, 
  });

const fileFilter = (req: Request, file: any, cb: FileFilterCallback) => {
    if (file.mimetype.startsWith("image/")) {
      cb(null, true);
    } else {
      cb(new Error("Only images are allowed"));
    }
  };
const upload = multer({
    storage: storage,
    limits: { fileSize: 50 * 1024 * 1024 },
});

export default uploadMiddleware;
