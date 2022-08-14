import React from "react";

const Button = ({ check, handleClick, addit }) => {
  return (
    <div className="buttonComponent">
      {!check ? (
        <button className="btn" onClick={handleClick}>
          Add Todo
        </button>
      ) : (
        <button className="btn" onClick={addit}>
          EDIT TODO
        </button>
      )}
    </div>
  );
};

export default Button;
