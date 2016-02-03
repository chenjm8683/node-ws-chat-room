SERVER_URL = "ws://localhost:8081"
var WebSocket = require('ws');

var readline = require('readline');
var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

var ws;

var sendMessage = function(type, content) {
  ws.send( JSON.stringify(
    {type: type, content: content}
  ));
};

var displayMessage = function(message) {
  // var type = data.type;
  // var name = data.name;
  // var content = data.content;
  // switch (type) {
  //   case 'connected':
  //     console.log("     %s joined the chat room.", name);
  //     break;
  //   case 'message':
  //     console.log("%s says: %s", name, content);
  //     break;
  // }

  console.log(message);
};

var enterMessage = function () {
  rl.question('\n', function(content) {
    sendMessage('message', content);
    // rl.close();
    enterMessage();
  });
};

rl.question('Your name: ', function(name) {
  ws = new WebSocket(SERVER_URL);
  ws.on('open', function () {
    sendMessage('init', name);
  });
  ws.on('message', function (message) {
    // displayMessage(JSON.parse(data));
    displayMessage(message);
  });
  // rl.close();
  enterMessage()
});











//
// ws.on('message', function response(data) {
//   console.log(data);
// });
