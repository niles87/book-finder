import React from "react";
// import { Link } from "react-router-dom";
import { List, ListItem } from "react";

function Navbar() {
  return (
    <>
      <nav className="navbar">
        <List>
          <ListItem>
            <a href="/">Search Books</a>
          </ListItem>
          <ListItem>
            <a href="/books">Saved Books</a>
          </ListItem>
        </List>
      </nav>
    </>
  );
}

export default Navbar;
