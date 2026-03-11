import * as taskRepository from "../repositories/taskRepository.js";

export  async function createTask(title,userId) {
    if(!title || title.trim() === ""){
        throw new Error("El titulo es obigatorio")
    }
    const task = await taskRepository.createTask(title,userId)

    return task;
}

export async function getUserTasks(userId) {
    
    const tasks = await taskRepository.getTasksByUser(userId)

    return tasks
}

export async function updateTask(id,title,completed,userId) {
    
    const updateTask = await taskRepository.updateTask(
        id,title,completed,userId
    )

    if (!updateTask) {
        throw new Error("Tarea no encontrada.")
    }

    return updateTask
}


export async function patchTask(id, updates, userId) {

  const task = await taskRepository.getTaskById(id, userId);

  if (!task) {
    throw new Error("Tarea no encontrada");
  }

  const newTitle = updates.title ?? task.title;
  const newCompleted = updates.completed ?? task.completed;

  return await taskRepository.updateTask(
    id,
    newTitle,
    newCompleted,
    userId
  );
}

export async function deleteTask(id,userId) {

    const deletedTask = await taskRepository.deleteTask(id,userId)

    if(!deletedTask){
        throw new Error("Tarea no encontrada.")
    }

    return deletedTask
}