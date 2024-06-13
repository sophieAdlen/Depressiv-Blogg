import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import bodyParser from "body-parser";
import userRouter from "./src/resources/users/users.routes.js";
import postRouter from "./src/resources/posts/posts.routes.js";


const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// api routes
app.use("/api/", userRouter);
app.use("/api/", postRouter);


app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});


// import express from 'express';
// import dotenv from 'dotenv';
// import cors from 'cors';
// import bodyParser from 'body-parser';
// import userRouter from './src/resources/users/users.routes.js';
// import postRouter from './src/resources/posts/posts.routes.js';

// dotenv.config(); // Läser miljövariabler från .env-filen

// const app = express();
// const port = process.env.PORT || 3000;

// // Middleware
// app.use(cors());
// app.use(bodyParser.json());

// // Error handling middleware for body-parser
// app.use((error, req, res, next) => {
//   if (error instanceof SyntaxError && error.status === 400 && 'body' in error) {
//     console.error('Bad JSON:', error);
//     return res.status(400).json({ error: 'Invalid JSON' });
//   }
//   next();
// });

// // API-routes
// app.use('/api/', userRouter);
// app.use('/api/', postRouter);

// app.listen(port, () => {
//   console.log(`Server is running at http://localhost:${port}`);
// });
