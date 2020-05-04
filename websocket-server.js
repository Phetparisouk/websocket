const WebSocket = require('ws');

const myWebSocketServer = new WebSocket.Server({ port: process.env.WS_PORT });

myWebSocketServer.on('connection', webSocket => {
    console.log('connection established');
});