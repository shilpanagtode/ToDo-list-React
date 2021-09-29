import React from "react";
import logo from "../assets/images/logo.png";

const header = () => {
  return (
    <header className="header">
      <nav>
        <div className="logo">
          <img src={logo} alt="Todoist"></img>
        </div>
      </nav>
    </header>
  );
};

export default header;
