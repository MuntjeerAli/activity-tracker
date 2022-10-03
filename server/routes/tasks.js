import express from "express";
const router = express.Router();
import {getTask, getAllTasks, createTask, updateTask, deleteTask} from '../controllers/tasksController.js'

router.get("/:id", getTask);

router.get("/", getAllTasks);

router.post("/", createTask);

router.patch("/:id", updateTask);

router.delete("/:id", deleteTask);

export default router;
