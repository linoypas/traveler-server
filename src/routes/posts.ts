import express from "express";
const router = express.Router();
import postsController from "../controllers/posts";
import authMiddleware from "../common/auth_middleware";
/**
* @swagger
* tags:
*   name: Posts
*   description: The Posts managing API
*/

/**
 * @swagger
 * components:
 *   schemas:
 *     Post:
 *       type: object
 *       required:
 *         - title
 *         - content
 *       properties:
 *         _id:
 *           type: string
 *           example: 60d0fe4f53112336168a109c2
 *         title:
 *           type: string
 *           example: The Best Post
 *         content:
 *           type: string
 *           example: Bla bla bla
 *         author:
 *           type: string
 *           example: 60d0fe4f531123f168a109c3
 */

/**
 * @swagger
 * /posts:
 *   get:
 *     summary: Get all posts
 *     description: Retrieves a list of all posts
 *     tags:
 *       - Posts
 *     responses:
 *       '200':
 *         description: A list of posts
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Post'
 *       '500':
 *         description: Internal server error
 */
router.get("/", (req, res) => postsController.getAll(req, res));

/**
 * @swagger
 * /posts/{id}:
 *   get:
 *     summary: Get a post by ID
 *     description: Retrieves a post by its ID
 *     tags:
 *       - Posts
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The post ID
 *     responses:
 *       '200':
 *         description: A single post
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Post'
 *       '404':
 *         description: Post not found
 *       '500':
 *         description: Internal server error
 */
router.get("/:id", postsController.getById.bind(postsController));

/**
 * @swagger
 * /posts:
 *   post:
 *     summary: Create a new post
 *     description: Creates a new post
 *     tags:
 *       - Posts
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Post'
 *     responses:
 *       '201':
 *         description: The created post
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Post'
 *       '400':
 *         description: Invalid input
 *       '401':
 *         description: Unauthorized
 *       '500':
 *         description: Internal server error
 */
router.post("/", authMiddleware, postsController.create.bind(postsController));

/**
 * @swagger
 * /posts/{id}:
 *   delete:
 *     summary: Delete a post by ID
 *     description: Deletes a post by its ID
 *     tags:
 *       - Posts
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The post ID
 *     responses:
 *       '200':
 *         description: Post deleted successfully
 *       '401':
 *         description: Unauthorized
 *       '404':
 *         description: Post not found
 *       '500':
 *         description: Internal server error
 */
router.delete(
  "/:id",
  authMiddleware,
  postsController.deleteItem.bind(postsController)
);

// router.put(
//   "/:id",
//   postsController.updateItem.bind(postsController)
// );


export default router;