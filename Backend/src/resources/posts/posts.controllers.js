// import { pool } from "./../../db/connect.js";
import {prisma} from "../../db/connect.js"



/**
 * @description Get all posts
 * @route GET /posts
 */
export async function getPosts(req, res) {
  try {
    const result = await prisma.post.findMany();

    if (!result.length) return res.status(404).json({ message: 'No posts found' });

    res.status(200).json(result);
  } catch (error) {
    console.error('Error details:', error);

    res.status(500).json({ error: 'Database query failed!' });
  }
}

/**
 * @description Get post
 * @route GET /posts/:id
 */
export async function getPost(req, res) {
  try {
    const { id } = req.params;

    const result = await prisma.post.findUnique({
      where: { id: parseInt(id) },
    });

    if (!result) return res.status(404).json({ message: 'Post not found' });

    res.status(200).json(result);
  } catch (error) {
    console.error('Error details:', error);

    res.status(500).json({ error: 'Database query failed!' });
  }
}


/**
 * @description Get posts by user
 * @route GET /users/:userId/posts
 */
export async function getPostsByUser(req, res) {
  try {
    const { userId } = req.params;

    const result = await prisma.post.findMany({
      where: { authorId: parseInt(userId) }, // Använd authorId istället för userId
    });

    if (!result.length) return res.status(404).json({ message: 'No posts found for this user' });

    res.status(200).json(result);
  } catch (error) {
    console.error('Error details:', error);
    res.status(500).json({ error: 'Database query failed!' });
  }
}


/**
 * @description Create post by user
 * @route POST /users/:userId/posts
 */
export async function createPostByUser(req, res) {
  try {
    const { userId } = req.params;
    const { title, content } = req.body;

    const result = await prisma.post.create({
      data: {
        title,
        content,
        authorId: parseInt(userId), // säkerställ att authorId är av typen Int
      },
    });

    res.status(201).json({ id: result.id, message: 'Post created!' });
  } catch (error) {
    console.error('Error details:', error);

    res.status(500).json({ error: 'Database query failed!' });
  }
}

/**
 * @description Update post
 * @route PUT /posts/:id
 */
export async function updatePost(req, res) {
  try {
    const { id } = req.params;
    const { title, content } = req.body;

    const result = await prisma.post.update({
      where: { id: String(id) }, // Konvertera ID till String här
      data: { title, content },
    });

    res.status(200).json({ message: "Post updated!" });
  } catch (error) {
    console.error("Error details:", error);
    res.status(500).json({ error: "Database query failed!" });
  }
}

/**
 * @description Delete post
 * @route DELETE /posts/:id
 */
export async function deletePost(req, res) {
  try {
    const { id } = req.params;

    const result = await prisma.post.delete({
      where: { id: String(id) }, // Konvertera ID till String här
    });

    res.status(200).json({ message: "Post deleted!" });
  } catch (error) {
    console.error("Error details:", error);
    res.status(500).json({ error: "Database query failed!" });
  }
}