// Exercise 9 - Websockets
// In this adventure, write some browser code that uses the websocket-stream module
// to print the string "hello\n".

var ws = require('websocket-stream');
var stream = ws('ws://localhost:8000');
stream.end('hello\n');