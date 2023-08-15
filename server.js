//6pack programmer node js class
//basic server creation
//and deploy server on vercel

const http = require("http");
// const fs = require("fs");
require("dotenv").config();
//accessing actual frontend home page in server file
const home = fs.readFileSync("./index.html", "utf-8");

const PORT = process.env.PORT || 2000;

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("home");
  } else if (req.url === "/about") {
    res.end("about page");
  } else if (req.url === "/service") {
    res.end("service page");
  } else if (req.url === "/contact") {
    res.end("contact page");
  } else {
    res.end("wrong url");
  }
});

server.listen(PORT, () => {
  console.log("server is working on ");
});
