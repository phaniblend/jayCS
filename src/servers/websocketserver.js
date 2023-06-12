const express = require('express');
const app = express();
const http = require('http').createServer(app);
const io = require('socket.io')(http);

io.on('connection', (socket) => {
  console.log('A client connected');

  // we're sending a message to the client immediately after connection
  socket.emit('message', { message: 'WebSocket Example' });

  // we're handling the 'disconnect' event from the client
  socket.on('disconnect', () => {
    console.log('A client disconnected');
  });
});

// we're starting the server on port 8003
http.listen(8003, () => {
  console.log('WebSocket server started on port 8003');
});

// we're handling any error that occurs during server startup
http.on('error', (error) => {
  console.error('Server error:', error.message);
});
