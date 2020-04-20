import React, { Component } from "react";
// import API from "../utils/API";
import Container from "../components/Container";
import { Form, Input, FormBtn } from "../components/Form";
import { List, ListItem } from "../components/List";

class Search extends Component {
  state = {
    books: [],
    title: "",
    author: "",
    synopsis: "",
  };

  render() {
    return (
      <Container>
        <div>
          <Form>
            <h1>Search For A Book</h1>
            <Input
              value={this.state.title}
              onChange={this.handleInputChange}
              name="title"
              placeholder="Title (required)"
            />
            <Input
              value={this.state.author}
              onChange={this.handleInputChange}
              name="author"
              placeholder="Author (required)"
            />
            <FormBtn
              disabled={!(this.state.author && this.state.title)}
              onClick={this.handleFormSubmit}
            >
              Submit Book
            </FormBtn>
          </Form>
        </div>
        <div>
          <h1>Results</h1>
          <List>
            <ListItem />
          </List>
        </div>
      </Container>
    );
  }
}

export default Search;
