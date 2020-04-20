import React from "react";
import "./style.css";

export function Form({ children }) {
  return <form className="form-container">{children}</form>;
}

export function Input(props) {
  return <input {...props} />;
}

export function FormBtn(props) {
  return (
    <button {...props} className="btn">
      {props.children}
    </button>
  );
}
