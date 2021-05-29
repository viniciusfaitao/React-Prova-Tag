const express = require("express");
const tagBooks = require("./app/tagBooks");
const goodReads = require("./app/goodReads");

let app = express();

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );

  next();
});

app.use(tagBooks);

app.use(goodReads);

const server = app.listen(3001, () => {
  const host = server.address().address;
  const port = server.address().port;

  console.log("Server listening at http://localhost:3001/");
});
