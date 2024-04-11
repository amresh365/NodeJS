const express = require("express");
const app = express();
const port = 3000;
const fs = require("fs");

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/nav", (req, res) => {
  const data = fs.readFileSync("index.html");
  res.send(data.toString());
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
