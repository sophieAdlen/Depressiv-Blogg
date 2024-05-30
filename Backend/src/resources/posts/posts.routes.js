import express from "express";

// Import handlers  from posts.controller.js
import {getPosts, getPost, getPostsByUser, createPostByUser, updatePost, deletePost} from "./posts.controllers.js";

const router = express.Router();


// CRUD for posts
router.get("/posts", getPosts);
router.get("/posts/:id", getPost);
router.get("/users/:userId/posts", getPostsByUser);
router.put("/posts/:id", updatePost);
router.post("/users/:userId/posts", createPostByUser);
router.delete("/posts/:id", deletePost);


export default router;