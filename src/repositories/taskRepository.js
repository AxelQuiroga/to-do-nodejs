import pool from "../config/db.js";

export async function createTask(title, userId) {

  const result = await pool.query(
    `INSERT INTO tasks (title, user_id)
     VALUES ($1, $2)
     RETURNING *`,
    [title, userId]
  );

  return result.rows[0];
}

export async function getTasksByUser(userId) {
  const result = await pool.query(
    `SELECT * FROM tasks
    WHERE user_id =$1`,
    [userId]
  )
  return result.rows
}

export async function updateTask(id,title,completed,userId) {

  const result = await pool.query(
    `UPDATE tasks
    SET title =$1, completed =$2
    WHERE id =$3 AND user_id =$4
    RETURNING *`,
    [title,completed,id,userId]
  )
  return result.rows[0]
}

export async function deleteTask(id,userId) {
  
  const result = await pool.query(
    `DELETE FROM tasks
    WHERE id =$1 AND user_id = $2
    RETURNING *`,
    [id,userId]
  )
  return result.rows[0]
}

export async function getTaskById(id, userId) {

  const result = await pool.query(
    `
    SELECT *
    FROM tasks
    WHERE id = $1 AND user_id = $2
    `,
    [id, userId]
  );

  return result.rows[0];
}