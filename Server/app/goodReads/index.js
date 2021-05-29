const fetch = require("node-fetch");
const express = require("express");

let app = express();

const key = `KGXBPKnyuYSnSpYDYo7rA`;
const secret = `Ynok75rEWd4uL8mH23HfCsvGSoMIU0afZi1x52R89zw`;
const goodReadsURL = `https://www.goodreads.com/`;

module.exports = app.use("*", (req, res) => {
  fetch(`${goodReadsURL}${req.originalUrl}`)
    .then((result) => result.json())
    .then((json) => res.send(json))
    .catch((error) => res.status(400).send("Erro na requisição."));
});
