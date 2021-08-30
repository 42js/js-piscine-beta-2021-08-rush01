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

const getApiAndEmit = (socket) => {
  const response = new Date();
  // Emitting a new message. Will be consumed by the client
  socket.emit('FromAPI', response);
};

io.on('connection', (socket) => {
  console.log('New client connected');
  if (interval) {
    clearInterval(interval);
  }
  interval = setInterval(() => getApiAndEmit(socket), 1000);
  socket.on('disconnect', () => {
    console.log('Client disconnected');
    clearInterval(interval);
  });
});

server.listen(port, () => console.log(`Listening on port ${port}`));
