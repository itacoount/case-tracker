import { Router } from "express";

const router = Router();

// In-memory tasks
let tasks: any[] = [];

// Create a task
router.post("/", (req, res) => {
  const { title, description, status, dueDate } = req.body;
  const newTask = {
    id: tasks.length + 1,
    title,
    description,
    status,
    dueDate,
  };
  tasks.push(newTask);
  res.status(201).json(newTask);
});

// Get all tasks
router.get("/", (_req, res) => {
  res.json(tasks);
});

// Get task by ID
router.get("/:id", (req, res) => {
  const task = tasks.find(t => t.id === parseInt(req.params.id));
  if (!task) return res.status(404).send("Task not found");
  res.json(task);
});

// Update task status
router.put("/:id", (req, res) => {
  const task = tasks.find(t => t.id === parseInt(req.params.id));
  if (!task) return res.status(404).send("Task not found");

  task.status = req.body.status;
  res.json(task);
});

// Delete task
router.delete("/:id", (req, res) => {
  tasks = tasks.filter(t => t.id !== parseInt(req.params.id));
  res.status(204).send();
});

export default router;
