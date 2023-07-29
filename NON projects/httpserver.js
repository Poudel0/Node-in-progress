// const { json } = require('express');
const http = require('http');
const PORT = 3000;
const server = http.createServer();
const jsonData = [
  {
    id: 101,
    name: 'Sandman',
  },
  {
    id: 102,
    name: 'Musiman',
  },
  {
    id: 103,
    name: 'Tusiman',
  },
];
server.on('request', (req, res) => {
  const items = req.url.split('/'); // /json/2 => ['','json','2']
  if (req.method == 'POST' && items[1] == 'json') {
    req.on('data', (data) => {
      const jsonData1 = data.toString();
      console.log('Request:', jsonData1);
      jsonData.push(JSON.parse(jsonData1));
    });
    req.pipe(res);
  } else if (req.method == 'GET' && items[1] === 'json') {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    if (items.length == 3) {
      const jsonIndex = Number(items[2]); /// Add '+' sign before string
      res.end(JSON.stringify(jsonData[jsonIndex]));
    } else {
      res.end(JSON.stringify(jsonData));
    }
  } else if (req.method == 'GET' && req.url === '/htm') {
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
