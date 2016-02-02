SERVER_URL = "ws://localhost:8081"
var WebSocket = require('ws');

var ws = new WebSocket(SERVER_URL);

ws.on('open', function open() {
  ws.send('hello world!');
});

ws.on('message', function response(data) {
  console.log(data);
});
