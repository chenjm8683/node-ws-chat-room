PORT = 8081;
// create and start a simple webserver
// var http = require('http');
// var server = http.createServer(function(request, response) {});
// server.listen(PORT, function() {
//   console.log('Serrver is listening on port %s', PORT);
// });

var WebSocketServer = require('ws').Server;
var wss = new WebSocketServer({ port: 8081 });

wss.broadcast = function(message) {
  wss.clients.forEach(function (client) {
    client.send(data);
  });
};

wss.on('connection', function connection(ws) {
  console.log("Client connected!")
  ws.send('Connected to server');

  ws.on('message', function incoming(message) {
    console.log('received: %s', message);
  });

  ws.send('Message received');
});
