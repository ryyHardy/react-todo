import { useState } from "react";

function ToDoList() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  function handleInputChange(event) {
    setNewTask(event.target.value);
  }
  function addTask() {
    if (newTask.trim() !== "") {
      // If the task doesn't consist of just whitespace
      setTasks(t => [...t, newTask]);
    }
    setNewTask(""); // reset input element
  }
  function deleteTask(index) {
    setTasks(t => t.filter((_, i) => i != index));
  }
  function moveTaskUp(index) {
    if (index > 0) {
      const updatedTasks = [...tasks];
      [updatedTasks[index], updatedTasks[index - 1]] = [
        // swaps two elements within an array
        updatedTasks[index - 1],
        updatedTasks[index],
      ];
      setTasks(updatedTasks);
    }
  }
  function moveTaskDown(index) {
    if (index < tasks.length - 1) {
      const updatedTasks = [...tasks];
      [updatedTasks[index], updatedTasks[index + 1]] = [
        // swaps two elements within an array
        updatedTasks[index + 1],
        updatedTasks[index],
      ];
      setTasks(updatedTasks);
    }
  }

  return (
    <div className='todo-container'>
      <h1>To-Do-List</h1>
      <div className='new-task-container'>
        <input
          type='text'
          placeholder='Enter a task...'
          value={newTask}
          onChange={handleInputChange}
        />
        <button
          className='add-btn'
          onClick={addTask}
        >
          Submit
        </button>
      </div>

      <ol>
        {tasks.map((task, index) => (
          <li key={index}>
            <span className='task-text'>{task}</span>
            <button
              className='delete-btn'
              onClick={() => deleteTask(index)}
            >
              Delete
            </button>
            <button
              className='move-btn'
              onClick={() => moveTaskUp(index)}
            >
              👆
            </button>
            <button
              className='move-btn'
              onClick={() => moveTaskDown(index)}
            >
              👇
            </button>
          </li>
        ))}
      </ol>
    </div>
  );
}

export default ToDoList;
