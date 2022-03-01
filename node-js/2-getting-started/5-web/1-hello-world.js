// const http = require('http');

// const server = http.createServer((req, res) => {
//   res.end('Hello World\n');
// });

// server.listen(4242, () => {
//   console.log('Server is running...');
// });



// My code..

const http = require('http');

const requestListener = (req, res) => {
  res.write('Oh hello visitor..');
  console.dir(res, { depth: 0 } );
  // console.log(req.url);
  res.end();
};

const server = http.createServer();
server.on('request', requestListener);

server.listen(6969, () => {
  console.log('quick the server is running away!!');
});