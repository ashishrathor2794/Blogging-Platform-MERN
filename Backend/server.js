import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";

import auth from "./routes/auth.js";
import posts from "./routes/posts.js";
import comments from "./routes/comments.js";

dotenv.config();

const app = express();

// Security
app.use(helmet());

// CORS
app.use(
  cors({
    origin: "https://blogging-platform-mern.vercel.app",
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type"],
  })
);

// Handle CORS preflight requests
app.options("*", cors());

// Middleware
app.use(express.json());
app.use(cookieParser());

// Test route
app.get("/", (req, res) => {
  res.json({
    message: "Blogging Platform API is running",
  });
});

// API routes
app.use("/api/auth", auth);
app.use("/api/posts", posts);
app.use("/api", comments);

// MongoDB connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB connected");

    // Start server
    app.listen(
      process.env.PORT || 5000,
      "0.0.0.0",
      () => {
        console.log("Blogging API running");
      }
    );
  })
  .catch((error) => {
    console.error("MongoDB connection error:", error);
    process.exit(1);
  });