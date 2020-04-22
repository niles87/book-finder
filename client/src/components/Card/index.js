import React from "react";
import "./style.css";

export function Card({ children }) {
  return <div className="card">{children}</div>;
}

export function CardImage({ children }) {
  return <div className="cardImage">{children}</div>;
}

export function CardBody({ children }) {
  return <div className="cardBody">{children}</div>;
}

export function CardFooter({ children }) {
  return <div className="cardFooter">{children}</div>;
}
