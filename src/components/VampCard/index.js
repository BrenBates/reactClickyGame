import React from "react";
import "./style.css";

function VampCard(props) {
  return (
    <div className="card">
      <div className="img-container">
        <img alt={props.name} src={props.image} onClick={() => props.handleClick(props.id)} />
      </div>
     
    </div>
  );
}

export default VampCard;