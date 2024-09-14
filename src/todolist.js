import React, { useEffect, useState } from "react";
import Todo from "./todo";
import Todoform from "./todoForm";

function Todolist() {
  const [todo, settodo] = useState([]);

  function Todos() {
    return todo?.map((todo) => {
      return (
        <Todo
          key={todo.id}
          id={todo.id}
          task={todo.task}
          removeTodo={removeTodo}
          updatedTodo={updatedTodo}
        />
      );
    });
  }

  function createTodo({ task, id }) {
    settodo([...todo, { task: task, id: id }]);
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
  return (
    <>
      <h1>todolist</h1>
      <Todoform createTodo={createTodo} />
      <ul>{Todos()}</ul>
    </>
  );
}

export default Todolist;
