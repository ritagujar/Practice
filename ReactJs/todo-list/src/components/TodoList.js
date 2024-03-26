import React from "react";
import "./todo.css";

const TodoList = () => {
  return (
    <div className="container">
      <h1 className="heading">TODO LIST</h1>
      <div className="input_container">
        <input type="text" placeholder="Enter the task" />
        <button>Add Task</button>
      </div>
    </div>
  );
};

export default TodoList;
