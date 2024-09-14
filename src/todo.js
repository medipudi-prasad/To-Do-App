import React, { useEffect, useState } from "react";

function Todo({ task, id, removeTodo, updatedTodo }) {
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

  function editingForm() {
    let result;
    if (isEditing) {
      result = (
        <div>
          <form onSubmit={handleUpdate}>
            <input
              type="text"
              onChange={handleChange}
              value={currentTask}
              name="currentTask"
            />
            <button>save</button>
          </form>
        </div>
      );
    } else {
      result = (
        <div>
          <li>{task}</li>
          <button onClick={handleEdit}>edit</button>
          <button onClick={handleRemove}>X</button>
        </div>
      );
    }
    return result;
  }
  return editingForm();
}

export default Todo;
