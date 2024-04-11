const http = require("http");
const fs = require("fs");
const port = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/html");
  if (req.url == "/") {
    res.statusCode = 200;
    res.end("<h1>I am On Server</h1><p>This Is a Paragraph</p>");
  } else if (req.url == "/nav") {
    res.statusCode = 200;
    const data = fs.readFileSync("index.html");
    res.end(data.toString());
  } else if (req.url == "/about") {
    res.statusCode = 200;
    res.end("<h1>This is About</h1>");
  }
});
server.listen(port, () => {
  console.log(`Serever Is Listioning ${port}`);
});
