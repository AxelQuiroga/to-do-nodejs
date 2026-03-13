import express from "express";
import { authMiddleware } from "../middlewares/authMiddleware.js";
import {
  createTask,
  updateTask,
  deleteTask,patchTaskController,
  getTasksController
} from "../controllers/taskController.js";
import { asyncHandler } from "../middlewares/asynchandler.js";

const router = express.Router();

router.post("/", authMiddleware, asyncHandler(createTask));

router.get("/", authMiddleware, asyncHandler(getTasksController));

router.put("/:id", authMiddleware, asyncHandler(updateTask));

router.patch(
  "/:id",
  authMiddleware,
  asyncHandler(patchTaskController)
);

router.delete("/:id", authMiddleware, asyncHandler(deleteTask));

export default router;
