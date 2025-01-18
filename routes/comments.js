const express = require('express');
const router = express.Router();
const commentsController = require('../controllers/comments');

router.post('/posts/:post_id/comments',commentsController.addComment);
router.get('/posts/:post_id/comments',commentsController.getComments);
router.put('/posts/:post_id/comments/:comment_id',commentsController.updateComment);

module.exports = router;

