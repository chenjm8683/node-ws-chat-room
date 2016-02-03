PORT = 8081;
// create and start a simple webserver
// var http = require('http');
// var server = http.createServer(function(request, response) {});
// server.listen(PORT, function() {
//   console.log('Serrver is listening on port %s', PORT);
// });

var WebSocketServer = require('ws').Server;
var wss = new WebSocketServer({ port: 8081 });

wss.broadcast = function(content) {
  wss.clients.forEach(function (client) {
    client.send(content);
  });
};

wss.on('connection', function (ws) {
  // console.log("Client connected!")
  // ws.send('Connected to server');

  ws.on('message', function (data) {
    data = JSON.parse(data);
    console.log(data);
    var type = data.type;
    var content = data.content;
    var message;
    switch (type) {
      case 'init':
        ws.clientName = content;
        message = "           " + ws.clientName + " joined the chat room.";
        break;
      case 'message':
        message = ws.clientName + " says: " + content;
        break;
    }
    console.log(message);
    wss.broadcast(message);
  });

  // ws.send('Message received');
});
