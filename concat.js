// Exercise 6 - Concat
// You will be given text on process.stdin. Buffer the text and reverse it using
// the `concat-stream` module before writing it to stdout.

var concat = require('concat-stream');
var c = concat(function (body) {
	var s = body.toString().split('').reverse().join('');
	console.log(s);
});

process.stdin.pipe(concat(function (body) {
	var s = body.toString().split('').reverse().join('');
	console.log(s);
}));
