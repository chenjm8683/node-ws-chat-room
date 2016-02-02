SERVER_URL = "ws://localhost:8081"
var WebSocket = require('ws');

var readline = require('readline');
var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

var ws;

rl.question('Your name: ', function(name) {
  ws = new WebSocket(SERVER_URL);
  ws.on('open', function open() {
    ws.send( JSON.stringify(
      {type: "name", data: name}
    ));
  });
});




//
// ws.on('message', function response(data) {
//   console.log(data);
// });
