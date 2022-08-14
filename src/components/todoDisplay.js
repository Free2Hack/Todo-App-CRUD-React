import React from "react";
import { FaEdit } from "react-icons/fa";
import { FaBackspace } from "react-icons/fa";
import { FaCalendarCheck } from "react-icons/fa";
const TodoDisplay = ({ todoList, handleEdit, deleteEntry, strikethrough }) => {
  return (
    <div className="displayComponent">
      {todoList &&
        todoList.length > 0 &&
        todoList.map((todo, index) => (
          <li key={index} className="list">
            {todo.strike ? (
              <span id={index} style={{ textDecorationLine: "line-through" }}>
                {todo.todo}
              </span>
            ) : (
              <span id={index} style={{ textDecorationLine: "" }}>
                {todo.todo}
              </span>
            )}
            <span className="spanElem">
              <FaCalendarCheck
                style={{ cursor: "pointer" }}
                onClick={() => strikethrough(todo.todo)}
              />
            </span>
            <span className="spanElem">
              <FaBackspace
                style={{ cursor: "pointer" }}
                onClick={() => deleteEntry(index)}
              />
            </span>
            <span style={{ float: "right" }}>
              <FaEdit
                style={{ cursor: "pointer" }}
                onClick={() => handleEdit(index)}
              />
            </span>
          </li>
        ))}
    </div>
  );
};

export default TodoDisplay;
