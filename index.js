http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('MY SITE IS WORKING...');
}).listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
