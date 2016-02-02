var WebSocketServer = require('ws').Server;
var wss = new WebSocketServer({ port: 8081 });
wss.on('connection', function connection(ws) {
  console.log("Client connected!")
  ws.send('Connected to server');
  ws.on('message', function incoming(message) {
    console.log('received: %s', message);
  });

  ws.send('Message received');
});
