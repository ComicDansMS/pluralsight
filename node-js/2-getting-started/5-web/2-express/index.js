const express = require('express');

const server = express();

server.get('/', (req, res) => {
  res.send('Hello express');
});

server.get('/boats', (req, res) => {
  res.send('Check out my boat');
})

server.listen(4242, () => {
  console.log('Express Server is running...');
});
