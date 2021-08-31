import express from 'express';
import http from 'http';
import { Server, Socket } from 'socket.io';
import cors from 'cors';
import index from './routes/index.js';
import 'dotenv/config';

const app = express();
app.use(cors());

app.use(index);

const server = http.createServer(app);

const port = process.env.PORT || 3005;

app.use(index);

const io = new Server(server, {
  cors: {
    origin: '*',
  },
});

let interval;
let rooms = 0;
// const getApiAndEmit = (socket) => {
//   const response = new Date();
//   // Emitting a new message. Will be consumed by the client
//   socket.emit('FromAPI', response);
// };

io.on('connection', (socket) => {
  console.log('New client connected');
  rooms += 1;
  socket.broadcast.emit('listAllRoom', { room: rooms });
  socket.on('updateGame', (value) => {
    console.log(value);
    socket.emit('updateGameToClient', value);
  });

  socket.on('createRoom', (data) => {
    socket.join(`room-${rooms}`);
    rooms += 1;
    socket.emit('newGame', { name: data.name, room: `room-${rooms}` });
  });
  socket.on('disconnect', () => {
    rooms -= 1;
    console.log('Client disconnected');
    clearInterval(interval);
  });
});

server.listen(port, () => console.log(`Listening on port ${port}`));
