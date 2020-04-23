import React from "react";
import "./style.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="copyTitle">
        <h4>Niles Bingham &copy; 2020</h4>
      </div>
      <div className="repoLink">
        <a href="https://github.com/niles87/book-finder/" target="_blank" rel="noopener noreferrer">
          Respository
        </a>
      </div>
    </footer>
  );
}

export default Footer;
