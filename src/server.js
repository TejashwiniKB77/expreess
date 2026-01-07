import dotenv from "dotenv";
dotenv.config();

import express from "express";
import mongoose from "mongoose";
import morgan from "morgan";

import authRoutes from "./routes/authRoutes.js";
import studentRoutes from "./routes/studentRoutes.js";
import errorHandler from "./middleware/errorHandler.js";

const app = express();

app.use(express.json());
app.use(morgan("dev"));

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

app.use("/api/auth", authRoutes);
app.use("/api/students", studentRoutes);

// 🔥 GLOBAL ERROR HANDLER (MUST BE LAST)
app.use(errorHandler);

app.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});
