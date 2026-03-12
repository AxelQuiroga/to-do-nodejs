import * as taskService from "../services/taskService.js";

export async function createTask(req,res){

    try {
        const {title} = req.body

        const userId = req.userId

        const task = await taskService.createTask(title,userId)

        res.status(201).json(task)
    } catch (error) {

        res.status(400).json({ error: error.message });
    }
}

export async function getTasks(req, res) {

  try {

    const userId = req.userId;

    const tasks = await taskService.getUserTasks(userId);

    res.json(tasks);

  } catch (error) {

    res.status(500).json({ error: error.message });

  }

}

export async function updateTask(req, res) {

  try {

    const { id } = req.params;

    const { title, completed } = req.body;

    const userId = req.userId;

    const task = await taskService.updateTask(
      id,
      title,
      completed,
      userId
    );

    res.json(task);

  } catch (error) {

    res.status(400).json({ error: error.message });

  }

}


export async function patchTaskController(req, res) {
  try {

    const { id } = req.params;
    const updates = req.body;
    const userId = req.userId;

    const updatedTask = await taskService.patchTask(
      id,
      updates,
      userId
    );

    res.json(updatedTask);

  } catch (error) {

    res.status(400).json({
      error: error.message
    });

  }
}


export async function deleteTask(req, res) {

  try {

    const { id } = req.params;

    const userId = req.userId;

    const task = await taskService.deleteTask(id, userId);

    res.json({
      message: "Tarea eliminada",
      task
    });

  } catch (error) {

    res.status(400).json({ error: error.message });

  }

}

export async function getTasksController(req,res) {

  try {
    
    const userId = req.userId

    const page = Number(req.query.page) || 1

    const limit = Number(req.query.limit) || 10
    
    const tasks = await taskService.getUserTasksLimit(
      userId,page,limit
    )

    res.json(tasks)

  } catch (error) {
    
    res.status(500).json({error: error.message})
  }
  
}