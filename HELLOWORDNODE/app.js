const http = require('node:http');
const hostname = '127.0.0.1';// host para onde é apontado o servidor (Local)
const port = 3000; //porta padrão para elementar o projeto

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello, World!\n, Dalé mane boladex, queles piques ????\n');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
//server.listen é como im ouvinte que escuta tudo o que se passa acima 