import React, { Component } from "react";

import { Form, Input, FormBtn } from "../components/Form";
import { Card, CardBody, CardFooter, CardImage } from "../components/Card";
import { List, ListItem } from "../components/List";
import Container from "../components/Container";
import Display from "../components/Display";
import Button from "../components/Button";
import Image from "../components/Image";
import API from "../utils/API";

class Search extends Component {
  state = {
    books: [],
    title: "",
  };

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  handleFormSubmit = (e) => {
    e.preventDefault();
    API.getBook(this.state.title).then((response) => {
      this.setState({ books: response.data.items, title: "" });
      console.log(this.state.books);
    });
  };

  handleClick = () => {
    // API.saveBook()
  };

  render() {
    return (
      <>
        <Display>
          <h1>Let's Find A Book For You!</h1>
        </Display>
        <Container>
          <div>
            <Form>
              <h1>Search For A Book</h1>
              <Input
                value={this.state.title}
                onChange={this.handleInputChange}
                name="title"
                placeholder="Title or Author (required)"
              />
              <FormBtn disabled={!this.state.title} onClick={this.handleFormSubmit}>
                <strong>Submit Book</strong>
              </FormBtn>
            </Form>
          </div>
          <div>
            <h1 style={{ textAlign: "center" }}>Results</h1>
            {this.state.books.length ? (
              <List>
                {this.state.books.map((book) => (
                  <ListItem key={book.id}>
                    <Card>
                      <CardImage>
                        <Image
                          src={
                            book.volumeInfo.imageLinks
                              ? book.volumeInfo.imageLinks.smallThumbnail
                              : ""
                          }
                          alt={book.volumeInfo.title}
                        />
                      </CardImage>
                      <CardBody>
                        <h4>
                          {book.volumeInfo.title} by {book.volumeInfo.authors}
                        </h4>
                        <p>{book.volumeInfo.description}</p>
                      </CardBody>
                      <CardFooter>
                        <a
                          href={book.volumeInfo.previewLink}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          preview
                        </a>
                        <Button save />
                      </CardFooter>
                    </Card>
                  </ListItem>
                ))}
              </List>
            ) : (
              <h2>No Results To Display</h2>
            )}
          </div>
        </Container>
      </>
    );
  }
}

export default Search;
