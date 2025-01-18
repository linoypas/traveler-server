const express = require('express');
const router = express.Router();
const postsContoller = require('../controllers/posts');

router.get('/posts',postsContoller.getPosts);
router.get('/posts/:post_id',postsContoller.getPostById);
router.delete('/posts/:post_id',postsContoller.deletePost);

module.exports = router;