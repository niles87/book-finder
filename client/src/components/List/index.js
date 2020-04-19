import React from "react";
// import "./style.css";

// This file exports both the List and ListItem components

export function List({ children }) {
  return (
    <div className="list-container">
      <ul className="book-list">{children}</ul>
    </div>
  );
}

export function ListItem({ children }) {
  return <li className="book-item">{children}</li>;
}
