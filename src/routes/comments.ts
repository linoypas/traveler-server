import express, { Request, Response } from 'express';
import commentsController from '../controllers/comments';

const router = express.Router();

router.post('/posts/:post_id/comments', (req: Request, res: Response) => {
    commentsController.addComment(req, res);
});

router.get('/posts/:post_id/comments', (req: Request, res: Response) => {
    commentsController.getComments(req, res);
});

router.put('/posts/:post_id/comments/:comment_id', (req: Request, res: Response) => {
    commentsController.updateComment(req, res);
});

router.get('/posts/:post_id/comments/:comment_id', (req: Request, res: Response) => {
    commentsController.getCommentById(req, res);
});

router.delete('/posts/:post_id/comments/:comment_id', (req: Request, res: Response) => {
    commentsController.deleteComment(req, res);
});

export default router;
