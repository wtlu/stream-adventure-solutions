// Exercise 7 - HTTP Server
// In this challenge, write an http server that uses a through stream to write back
// the request stream as upper-cased response data for POST requests.

var http = require('http');
var through = require('through');
var server = http.createServer(function (req, res) {
	if (req.method === 'POST') {
		req.pipe(through(write)).pipe(res);
	} else {
		res.end('send me POST\n');
	}
});
server.listen(process.argv[2]);

function write (buf) {
	this.queue(buf.toString().toUpperCase());
}