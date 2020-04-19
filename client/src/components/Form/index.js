import React from "react";

export function Form({ children }) {
  return <form className="form-container">{children}</form>;
}

export function Input(props) {
  return (
    <div className="input-container">
      <input {...props} />
    </div>
  );
}

export function FormBtn(props) {
  return (
    <button {...props} style={{ float: "right", marginBottom: 10 }} className="btn btn-success">
      {props.children}
    </button>
  );
}
