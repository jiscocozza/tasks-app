import React from "react";
import "./Task.css";

function Task({ id, text, done, completeTask, deleteTask }) {
  return (
    <div className={done ? 'task done' : 'task'}>
      <div
        onClick={() => completeTask(id)}>
        {text}
      </div>
      <div
        onClick={() => deleteTask(id)}>
        X
      </div>
    </div>
  )
}

export default Task; 