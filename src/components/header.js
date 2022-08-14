import React from "react";

const Header = () => {
  return (
    <div className="header">
      <nav>
        <label className="label">Todo List</label>
        <label className="label label1" style={{ float: "right" }}>
          With CRUD Operations
        </label>
      </nav>
    </div>
  );
};

export default Header;
