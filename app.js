const express = require("express");
const app = express();

app.get("/", (request, responce) => {
  responce.send("Home Page");
});

app.get("/about", (request, responce) => {
  responce.send("About Page");
});

app.listen(3000);

module.exports = app;
