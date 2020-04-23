import React, { Component } from "react";

import { Card, CardBody, CardFooter, CardImage } from "../components/Card";
import { List, ListItem } from "../components/List";
import Container from "../components/Container";
import Display from "../components/Display";
import Button from "../components/Button";
import Image from "../components/Image";
import API from "../utils/API";

class Saved extends Component {
  state = {
    books: [],
  };

  componentDidMount() {
    this.loadBooks();
  }

  loadBooks = () => {
    API.getBooks()
      .then((res) => {
        this.setState({ books: res.data });
      })
      .catch((err) => console.log(err));
  };

  handleDelete = (id) => {
    API.deleteBook(id)
      .then((res) => this.loadBooks())
      .catch((err) => console.log(err));
  };

  render() {
    return (
      <>
        <Display>
          <h1>Saved Books</h1>
        </Display>
        <Container>
          {this.state.books.length ? (
            <List>
              {this.state.books.map((book) => (
                <ListItem key={book._id}>
                  <Card>
                    <CardImage>
                      <Image src={book.image ? book.image : ""} alt={book.title} />
                    </CardImage>
                    <div>
                      <CardBody>
                        <h4>
                          {book.title} by {book.authors}
                        </h4>
                        <p>{book.description}</p>
                      </CardBody>
                      <CardFooter>
                        <a href={book.link} target="_blank" rel="noopener noreferrer">
                          preview
                        </a>
                        <Button onClick={() => this.handleDelete(book._id)} />
                      </CardFooter>
                    </div>
                  </Card>
                </ListItem>
              ))}
            </List>
          ) : (
            <h2>No Saved Books</h2>
          )}
        </Container>
      </>
    );
  }
}

export default Saved;
