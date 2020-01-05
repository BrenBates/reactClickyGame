import React from "react";
import "./style.css";

function Header() {
  return (
    <div className="header">
        <p id="headerLeft">Clicky Game</p>
        <p id="headerMiddle">Click an image to begin!</p>
        <p id="headerRight">Score: 0 | Top Score: 0</p>
    </div>
  );
}

export default Header;
