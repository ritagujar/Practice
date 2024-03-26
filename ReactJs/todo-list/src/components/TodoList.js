import React, { useState } from "react";
import { addTodo, deleteTodo } from "../actions";
import "./todo.css";
import { useDispatch } from "react-redux";

const TodoList = () => {
  const [inputData, setInputData] = useState("");
  const dispatch = useDispatch();

  console.log(inputData);
  return (
    <div className="container">
      <h1 className="heading">TODO LIST</h1>
      <div className="input_container">
        <input
          type="text"
          placeholder="Enter the task"
          value={inputData}
          onChange={(e) => setInputData(e.target.value)}
        />
        <button onClick={() => dispatch(addTodo(inputData))}>Add Task</button>
      </div>
    </div>
  );
};

export default TodoList;
