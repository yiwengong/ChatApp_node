const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');

const publicPath = path.join(__dirname,'../public')
const port = process.env.PORT || 3000;
var app = express();
var server = http.createServer(app);
var io = socketIO(server);

app.use(express.static(publicPath));

//resigter a event listener
io.on('connection', (socket) => {
  console.log('New user connected');

  socket.emit('newMessage', {
    from: 'test@test.com',
    text:'Hey, what is going on?',
    createAt: 123
  });

  socket.on('createMessage', (newMessage) => {
    console.log('createMessage: ', newMessage);
  });

  socket.on('disconnect', (socket) => {
    console.log('User was disconnected');
  });
});

server.listen(port, ()=>{
  console.log(`Starting on port ${port}`);
})
