import express from "express";
import { authMiddleware } from "../middlewares/authMiddleware.js";
import {
  createTask,
  getTasks,
  updateTask,
  deleteTask,patchTaskController,
  getTasksController
} from "../controllers/taskController.js";

const router = express.Router();

router.post("/", authMiddleware, createTask);

router.get("/", authMiddleware, getTasks);

router.get("tasks",authMiddleware,getTasksController)

router.put("/:id", authMiddleware, updateTask);

router.patch(
  "/tasks/:id",
  authMiddleware,
  patchTaskController
);

router.delete("/:id", authMiddleware, deleteTask);

export default router;