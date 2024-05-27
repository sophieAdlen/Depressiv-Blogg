import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import bodyParser from "body-parser";
import userRouter from "./src/resources/users/users.routes.js";

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// api routes
app.use("/api/", userRouter);



app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
