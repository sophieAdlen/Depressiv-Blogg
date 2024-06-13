import express from 'express';
import { authenticateToken } from '../../authMiddleware.js';

// Import handlers from posts.controller.js
import { getPosts, getPost, getPostsByUser, createPostByUser, updatePost, deletePost } from './posts.controllers.js';

const router = express.Router();

// CRUD for posts
router.get('/posts', authenticateToken, getPosts);
router.get('/posts/:id', authenticateToken, getPost);
router.get('/users/:userId/posts', authenticateToken, getPostsByUser);
router.put('/posts/:id', authenticateToken, updatePost);
router.post('/users/:userId/posts', authenticateToken, createPostByUser);
router.delete('/posts/:id', authenticateToken, deletePost);

export default router;
