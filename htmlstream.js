// Exercise 10 - HTML Stream
// Your program will get some html written to stdin. Convert all the inner html to
// upper-case for elements with a class name of "loud".

var trumpet = require('trumpet');
var through = require('through');
var tr = trumpet();
process.stdin.pipe(tr).pipe(process.stdout);

var stream = tr.select('.loud').createStream();
stream.pipe(through(write)).pipe(stream);

function write (buf) {
	this.queue(buf.toString().toUpperCase());
}