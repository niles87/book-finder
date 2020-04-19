import React, { Component } from "react";
import API from "../utils/API";
import Container from "../components/Container";
import { List, ListItem } from "../components/List";

class Saved extends Component {
  state = {
    books: [],
    title: "",
    author: "",
    synopsis: "",
  };

  componentDidMount() {
    this.loadBooks();
  }

  loadBooks = () => {
    API.getBooks()
      .then((res) => this.setState({ books: res.data, title: "", author: "", synopsis: "" }))
      .catch((err) => console.log(err));
  };

  render() {
    return (
      <Container>
        <List>
          <ListItem></ListItem>
        </List>
      </Container>
    );
  }
}

export default Saved;
