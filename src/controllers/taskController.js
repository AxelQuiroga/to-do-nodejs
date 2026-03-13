import * as taskService from "../services/taskService.js";

export async function createTask(req,res){


        const {title} = req.body

        const userId = req.userId

        const task = await taskService.createTask(title,userId)

        res.status(201).json(task)

    
}

export async function getTasks(req, res) {


    const userId = req.userId;

    const tasks = await taskService.getUserTasks(userId);

    res.json(tasks);



  

}

export async function updateTask(req, res) {

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


}


export async function patchTaskController(req, res) {
  

    const { id } = req.params;
    const updates = req.body;
    const userId = req.userId;

    const updatedTask = await taskService.patchTask(
      id,
      updates,
      userId
    );

    res.json(updatedTask);


}


export async function deleteTask(req, res) {



    const { id } = req.params;

    const userId = req.userId;

    const task = await taskService.deleteTask(id, userId);

    res.json({
      message: "Tarea eliminada",
      task
    });



}

export async function getTasksController(req,res) {


    const userId = req.userId

   const limit = Number(req.query.limit) || 10;
  const page = Number(req.query.page) || 1;

  const offset = (page - 1) * limit;

    const tasks = await taskService.getUserTasksLimit(
      userId,
      limit,
      page,
      offset
    )

    res.json(tasks)


}
