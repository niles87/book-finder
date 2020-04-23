const db = require("../models");
const axios = require("axios");
require("dotenv").config();

const apiKey = process.env.APIKEY;

// Defining methods for the booksController
module.exports = {
  findAll: function (req, res) {
    db.Book.find(req.query)
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  create: function (req, res) {
    const book = {
      title: req.body.volumeInfo.title,
      authors: req.body.volumeInfo.authors,
      description: req.body.volumeInfo.description,
      image: req.body.volumeInfo.imageLinks.smallThumbnail,
      link: req.body.volumeInfo.previewLink,
    };
    console.log(book);
    db.Book.create(book)
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  remove: function (req, res) {
    db.Book.findById({ _id: req.params.id })
      .then((dbModel) => dbModel.remove())
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  searchForBook: function (req, res) {
    axios
      .get(
        `https://www.googleapis.com/books/v1/volumes?q=${req.params.id}&orderBy=relevance&key=${apiKey}`
      )
      .then((data) => res.json(data.data));
  },
};
