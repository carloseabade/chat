const express = require('express');
const path = require('path');

const app = express();
const server = require('http').createServer(app);
const io = require('socket.io')(server);

app.use(express.static(path.join(__dirname, '..', 'public')));
app.set('views', path.join(__dirname, '..', 'public'));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

app.use('/', (req, res) => {
  res.render('index.html');
});

let users = {};

// When a user connects, stores the new connected user, and send the new array to all users, including the recent connected user itself
io.on('connection', socket => {
  console.log(`Socket conectado: [${socket.handshake.query.author}] - ${socket.id}`);
  users[socket.id] = socket.handshake.query.author;
  console.log('\x1b[36m%s\x1b[0m %s', "Users", JSON.stringify(users))
  socket.emit('connectedUsers', users);
  socket.broadcast.emit('connectedUsers', users);

  // When a user sends a message, send the message only to the selected users
  socket.on('sendMessage', data => {
    let users = data.users
    delete data.users

    for (const id in users) {
      if (users.hasOwnProperty(id)) {
        io.to(id).emit('receivedMessage', data)
      }
    }
  });

  // When a user disconnects, remove the user from the users array, and send the new array to all other users
  socket.on('disconnect', () => {
    delete users[socket.id];
    socket.broadcast.emit('connectedUsers', users);
    console.log('\x1b[31m%s\x1b[0m %s' ,"Users", JSON.stringify(users))
  });
});

server.listen(3000);