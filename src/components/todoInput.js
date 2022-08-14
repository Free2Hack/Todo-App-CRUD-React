import React from "react";

const TodoInput = ({ inputHandle, todo }) => {
  return (
    <div className="inputComponent">
      <input
        className="input"
        type={"text"}
        value={todo}
        onChange={(e) => inputHandle(e)}
      />
    </div>
  );
};

export default TodoInput;
