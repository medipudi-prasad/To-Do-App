import React, { useEffect, useState } from "react";
import "./ToDo.css";
function Todo({ task, id, removeTodo, updatedTodo, completed, toggle }) {
  const [isEditing, setIsEditing] = useState(false);
  const [currentTask, setCurrentTask] = useState(task);
  function handleRemove() {
    removeTodo(id);
  }
  function handleEdit() {
    setIsEditing(!isEditing);
  }
  function handleUpdate(evt) {
    evt.preventDefault();
    updatedTodo(id, currentTask);
    setIsEditing(!isEditing);
  }
  function handleChange(evt) {
    setCurrentTask(evt.target.value);
  }
  function handleOnClick() {
    toggle(id);
  }

  function editingForm() {
    let result;
    if (isEditing) {
      result = (
        <div className="todo">
          <form onSubmit={handleUpdate}>
            <input
              type="text"
              onChange={handleChange}
              value={currentTask}
              name="currentTask"
            />
            <button
              class="button"
              role="button"
              style={{
                backgroundColor: "green",
                marginLeft: "5px",
                color: "white",
                width: "80px",
                cursor: "pointer",
              }}
            >
              save
            </button>
          </form>
        </div>
      );
    } else {
      result = (
        <div className="todo">
          <li
            className={completed ? "todo-task completed" : "todo-task"}
            onClick={handleOnClick}
          >
            {task}
          </li>
          <div className="todo-buttons">
            <button onClick={handleEdit}>
              <i
                class="fas fa-pen"
                style={{
                  width: "40px",
                  height: "30px",
                  backgroundColor: "#61dafb73",
                  cursor: "pointer",
                }}
              />
            </button>
            <button onClick={handleRemove}>
              <i
                class="fas fa-trash"
                style={{
                  width: "40px",
                  height: "30px",
                  backgroundColor: "#61dafb73",
                  cursor: "pointer",
                }}
              />
            </button>
          </div>
        </div>
      );
    }
    return result;
  }
  return editingForm();
}

export default Todo;
