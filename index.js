const http = require('http');

const port = 3000;

http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' });

  res.end(`
    <!DOCTYPE html>
    <html>
      <head>
        <title>My Site</title>
      </head>
      <body style="text-align:center; font-family:Arial; margin-top:50px;">
        <h1>✨ My Site is Working ✨</h1>
        <p>Welcome to my website!</p>
      </body>
    </html>
  `);

}).listen(port, () => {
  console.log("Server running at http://localhost:3000");
});
