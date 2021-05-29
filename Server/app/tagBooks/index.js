const fs = require("fs");
const express = require("express");
let app = express();

const getBookData = () => {
  const jsonData = fs.readFileSync("livros.json");
  return JSON.parse(jsonData);
};

module.exports = app.get("/tagBooks", (req, res) => {
  const books = getBookData();
  res.send(books);
});
