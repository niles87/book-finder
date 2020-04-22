import React from "react";
import "./style.css";

function Button(props) {
  return (
    <button className={props.save ? "save" : "delete"} onClick={props.onClick}>
      {props.save ? "save" : "delete"}
    </button>
  );
}

export default Button;
