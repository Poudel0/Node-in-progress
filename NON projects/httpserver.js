const http = require('http');
const PORT = 3000;
const server = http.createServer();
server.on('request', (req, res) => {
  if (req.url === '/json') {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.end(
      JSON.stringify({
        id: 101,
        name: 'Sandman',
      })
    );
  } else if (req.url === '/htm') {
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<body>');
    res.write('<p>Hello Jello</p> ');
    res.write('</body>');
    res.write('</html>');
    res.end();
  } else {
    res.statusCode = 404;
    res.end();
  }
});

server.listen(PORT, () => {
  console.log('Listening');
});
