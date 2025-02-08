const http = require('http');

const server = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'application/json');
  
  if (req.method === 'GET') {
    if (req.url === '/') {
      res.statusCode = 200;
      res.end(JSON.stringify({ message: "Welcome to the Home Page!" }));
    } else if (req.url === '/about') {
      res.statusCode = 200;
      res.end(JSON.stringify({ message: "This is the About Page!" }));
    } else if (req.url === '/contact') {
      res.statusCode = 200;
      res.end(JSON.stringify({ message: "Contact us at: contact@example.com" }));
    } else {
      res.statusCode = 404;
      res.end(JSON.stringify({ error: "Resource not found!" }));
    }
  } else {
    res.statusCode = 405;
    res.end(JSON.stringify({ error: "Method not allowed!" }));
  }
});
server.listen(3000, () => {
  console.log("Server is listening on port 3000");
});
