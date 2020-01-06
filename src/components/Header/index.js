import React from "react";
import "./style.css";
import { GiVampireCape } from "react-icons/gi";

function Header(props) {
  return (
    <div className="header">
        <p id="headerLeft">Vampire Clicky Game <GiVampireCape/></p>
  <p id="headerMiddle">{props.headerText}</p>
        <p id="headerRight">Score: {props.score} | Top Score: {props.topScore}</p>
    </div>
  );
}

export default Header;
