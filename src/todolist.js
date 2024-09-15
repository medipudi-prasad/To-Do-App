import React, { useEffect, useState } from "react";
import Todo from "./todo";
import Todoform from "./todoForm";
import "./todolist.css";

function Todolist() {
  const [todo, settodo] = useState([]);

  function Todos() {
    return todo?.map((todo) => {
      return (
        <Todo
          key={todo.id}
          id={todo.id}
          task={todo.task}
          completed={todo.completed}
          removeTodo={removeTodo}
          updatedTodo={updatedTodo}
          toggle={toggle}
        />
      );
    });
  }

  function createTodo({ task, id, completed }) {
    settodo([...todo, { task: task, id: id, completed: completed }]);
  }
  function removeTodo(id) {
    settodo(todo.filter((todo) => todo.id !== id));
  }
  function updatedTodo(id, task) {
    let updatedTodos = todo?.map((todo) => {
      if (todo.id === id) {
        return { ...todo, task: task };
      } else {
        return todo;
      }
    });
    settodo(updatedTodos);
  }
  function toggle(id) {
    let updatedTodos = todo?.map((todo) => {
      if (todo.id === id) {
        return { ...todo, completed: !todo.completed };
      } else {
        return todo;
      }
    });
    settodo(updatedTodos);
  }
  return (
    <div className="todo-list">
      <h1>
        ToDo List! <span>A Simple React ToDo App.</span>
      </h1>

      <Todoform createTodo={createTodo} />
      <ul>{Todos()}</ul>
    </div>
  );
}

export default Todolist;
