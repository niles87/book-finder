import React from "react";
import { List, ListItem } from "../List";

function Navbar() {
  return (
    <nav className="navbar">
      <List>
        <ListItem>
          <a className="navbar-brand" href="/">
            Search Books
          </a>
        </ListItem>
      </List>
      <List>
        <ListItem>
          <a className="navbar-brand" href="/books">
            Saved Books
          </a>
        </ListItem>
      </List>
    </nav>
  );
}

export default Navbar;
