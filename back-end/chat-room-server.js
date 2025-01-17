const http = require('http');
const express = require('express');
const socketIo = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketIo(server, {
    cors: {
        origin: '*',
        methods: '*',
    }
});

io.on('connection', (socket) => {
    console.log('New client connected!');

    socket.on('new message', (data) => {
        io.emit('new message posted', data);
    });
});

server.listen(3001, () => {
    console.log('Server is listening on port 3001');
});