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
    db.Book.create(req.body)
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
        `https://www.googleapis.com/books/v1/volumes?q=${req.params.id}&maxResults=5&orderBy=relevance&key=${apiKey}`
      )
      .then((data) => res.json(data.data));
  },
};
