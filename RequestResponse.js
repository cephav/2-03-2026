const http = require("http");

const server = http.createServer((req, res) => {

  if (req.url === "/") {
    res.write("<h1>Home Page</h1>");
    res.end();
  }

  else if (req.url === "/text") {
    res.write("This is text file, Rakesh");
    res.end();
  }

  else if (req.url === "/json") {
    res.write(JSON.stringify({ name: "Rakesh" }));
    res.end();
  }

});

server.listen(3000, () => {
  console.log("Server is running");
});