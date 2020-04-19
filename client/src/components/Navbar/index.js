import React from "react";
import { Link } from "react-router-dom";
import { List, ListItem } from "react";

function Navbar() {
  return (
    <nav>
      <List>
        <ListItem>
          <Link to="/" />
        </ListItem>
        <ListItem>
          <Link to="/books" />
        </ListItem>
      </List>
    </nav>
  );
}

export default Navbar;
