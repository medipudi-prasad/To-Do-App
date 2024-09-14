import React, { useState } from "react";
import { v4 as uuid } from "uuid";

function Todoform({ createTodo }) {
  const [task, setTask] = useState("");
  function handleChange(evt) {
    setTask(evt.target.value);
  }
  function handleSubmit(evt) {
    evt.preventDefault();
    createTodo({ task, id: uuid() });
    setTask("");
  }
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="task">New ToDo</label>
      <input
        name="task"
        type="text"
        placeholder="New ToDo"
        id="task"
        value={task}
        onChange={handleChange}
      />
      <button>Add Todo!</button>
    </form>
  );
}

export default Todoform;
