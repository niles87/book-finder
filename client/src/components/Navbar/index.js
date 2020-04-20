import React from "react";
import "./style.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div>
        <h2 className="title">
          <a className="link" href="/">
            Book Finder
          </a>
        </h2>
      </div>
      <div>
        <ul>
          <li>
            <a className="link" href="/">
              Search Books
            </a>
          </li>
          |
          <li>
            <a className="link" href="/books">
              Saved Books
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
