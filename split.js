// Exercise 5: Lines
// Instead of transforming every line as in the previous "INPUT OUTPUT" example,
// for this challenge, convert even-numbered lines to upper-case and odd-numbered
// lines to lower-case. Consider the first line to be odd-numbered. For example
// given this input:

var split = require('split');
var through = require('through');

var linecount = 0;
var tr = through(write);
process.stdin
	.pipe(split())
	.pipe(tr)
	.pipe(process.stdout);

function write (buf) {
	linecount++;
	var line = buf.toString();
	if (linecount % 2 === 0) {
		this.queue(line.toUpperCase() + '\n');
	} else { // linecount % 2 === 1
		this.queue(line.toLowerCase() + '\n');
	}
}