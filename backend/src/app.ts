import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import tasksRouter from "./routes/tasks";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

// Routes
app.use("/api/tasks", tasksRouter);

// Health check
app.get("/", (_req, res) => {
  res.send("API is running");
});

export default app;
