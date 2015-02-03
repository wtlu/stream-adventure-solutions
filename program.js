// Exercise 2
// You will get a file as the first argument to your program (process.argv[2]).

// Use `fs.createReadStream()` to pipe the given file to `process.stdout`.

var fs = require('fs');
var filename = process.argv[2] // Assume first argument is filename

fs.createReadStream(filename).pipe(process.stdout);