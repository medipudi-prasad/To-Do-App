import React, { useState } from "react";
import { v4 as uuid } from "uuid";
import "./todoform.css";

function Todoform({ createTodo }) {
  const [task, setTask] = useState("");
  const [message, setMessage] = useState("");

  function handleChange(evt) {
    setTask(evt.target.value);
    setMessage("");
  }
  function handleSubmit(evt) {
    evt.preventDefault();
    if (task === "") {
      setMessage("Input Should Not Be Empty");
    } else {
      createTodo({ task, id: uuid(), completed: false });
      setTask("");
    }
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="task"></label>
        <input
          name="task"
          type="text"
          placeholder="New ToDo"
          id="task"
          value={task}
          onChange={handleChange}
        />
        <button
          style={{
            backgroundColor: "green",
            marginLeft: "5px",
            color: "white",
            width: "80px",
            cursor: "pointer",
          }}
        >
          Add Todo !
        </button>
      </form>
      {message && (
        <p
          style={{
            color: "red",
            fontSize: "12px",
          }}
        >
          {message}
        </p>
      )}
    </>
  );
}

export default Todoform;
