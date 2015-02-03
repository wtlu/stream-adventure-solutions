// Exercise 3 + 4
// Convert data from `process.stdin` to upper-case data on `process.stdout`
// using the `through` module.


var through = require('through');
var tr = through(write, end);
process.stdin.pipe(tr).pipe(process.stdout);

function write (buf) {
	var result = buf.toString().toUpperCase();
	this.queue(result);
}

// default end, do not really need this
function end () {
	this.queue(null);
}