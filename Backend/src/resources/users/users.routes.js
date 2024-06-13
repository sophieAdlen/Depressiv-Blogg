import express from 'express';
import { authenticateToken } from '../../authMiddleware.js'; 

// Import handlers from users.controllers.js
import { getUsers, getUser, createUser, updateUser, deleteUser, loginUser } from './users.controllers.js';

const router = express.Router();

// CRUD for users
router.get('/users', authenticateToken, getUsers);
router.get('/users/:id', authenticateToken, getUser);
router.put('/users/:id', authenticateToken, updateUser);
router.post('/users/new', createUser); // skapa användare utan autentisering
router.delete('/users/:id', authenticateToken, deleteUser);

// Login route
router.post('/login', loginUser);

export default router;
