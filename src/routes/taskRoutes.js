import express from "express";
import { authMiddleware } from "../middlewares/authMiddleware.js";
import {
  createTask,
  updateTask,
  deleteTask,patchTaskController,
  getTasksController
} from "../controllers/taskController.js";

const router = express.Router();

router.post("/", authMiddleware, createTask);

router.get("/", authMiddleware, getTasksController);

router.put("/:id", authMiddleware, updateTask);

router.patch(
  "/:id",
  authMiddleware,
  patchTaskController
);

router.delete("/:id", authMiddleware, deleteTask);

export default router;
