import React from "react";
import "./style.css";

function Header(props) {
  return (
    <div className="header">
        <p id="headerLeft">Vampire Clicky Game</p>
        <p id="headerMiddle">Don't click the same image twice!</p>
        <p id="headerRight">Score: {props.score} | Top Score: {props.topScore}</p>
    </div>
  );
}

export default Header;
