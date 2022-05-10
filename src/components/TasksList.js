import React, { useState } from "react";
import Task from "./Task"
import { v4 as uuidv4 } from 'uuid';

const tasksMock = [
  { id: 1, text: "Clean my bedroom", done: false },
  { id: 2, text: "Finish homework", done: false },
  { id: 3, text: "Bath dog", done: false },
  { id: 4, text: "Bath cat", done: false }
];

function TasksList() {

  const [tasks, setTasks] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const addTask = (event)=> {
    /*event.preventDefault();*/
    const newTask = {
      id: uuidv4(),
      text: inputValue,
      done: false
    }

    console.log(newTask);
    if (newTask.text.trim()) {
      newTask.text = newTask.text.trim();
      setTasks([newTask, ...tasks]);
    } else {
      alert("Please, add text to your new task.")
    }
  };

  const deleteTask = id => {
     setTasks(tasks.filter(task => task.id !== id));
  };

  const completeTask = id => {
    const updatedTasks = tasks.map(task => {
      if (task.id === id) {
        task.done = !task.done;
      }
      return task;
     });
    setTasks(updatedTasks);
  };

  const handleChange = (event)=> {
    setInputValue(event.target.value);
  };

  return (
    <>
      <form>
        <input type="text" onChange={handleChange} />
        <button type="button" onClick={addTask}>Add task</button>
      </form>
  
      <div className="tasks-list-container">
        {
          tasks.map((task) =>
            <Task
              key={task.id}
              id={task.id}
              text={task.text}
              done={task.done}
              deleteTask={deleteTask}
              completeTask={completeTask} />
          )
        }
      </div>
    </>
  );
}

export default TasksList;