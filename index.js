
const http = require('http');

const port = process.env.PORT || 3000;

http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' });

  res.end(`
    <!DOCTYPE html>
    <html>
    <head>
      <title>My Site</title>
      <style>
        body {
          margin: 0;
          font-family: Arial, sans-serif;
          background: linear-gradient(135deg, #4facfe, #00f2fe);
          height: 100vh;
          display: flex;
          justify-content: center;
          align-items: center;
          color: white;
        }
        .container {
          text-align: center;
        }
        h1 {
          font-size: 3em;
          margin-bottom: 10px;
        }
        p {
          font-size: 1.2em;
          opacity: 0.9;
        }
        button {
          margin-top: 20px;
          padding: 12px 24px;
          font-size: 1em;
          border: none;
          border-radius: 25px;
          background: white;
          color: #007BFF;
          cursor: pointer;
          transition: 0.3s;
        }
        button:hover {
          background: #ddd;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <h1>Welcome to My Site </h1>
        <p>Your server is running successfully!</p>
        <button onclick="alert('Thanks for visiting!')">Click Me</button>
      </div>
    </body>
    </html>
  `);

}).listen(port, () => {
  console.log(\`Server running at http://localhost:\${port}\`);
});
