// Exercise 12
// In this example, you will be given a readable stream, `counter`, as the first
// argument to your program:
// Return a duplex stream with the `counter` as the readable side. You will be
// written objects with a 2-character `country` field as input
// Create an object to keep a count of all the countries in the input. Once the
// input ends, call `counter.setCounts()` with your country counts.


var duplexer = require('duplexer');
var through = require('through');

module.exports = function (counter) {
	var countries = {};
	var tr = through(write, end);

  // return a duplex stream to capture countries on the writable side
  // and pass through `counter` on the readable side
  return duplexer(tr, counter);

	function write (buf) {
		var cur_country = buf.country;
		if (!countries[cur_country]) {
			countries[cur_country] = 1;
		} else {
			countries[cur_country] += 1;
		}
	}

	function end () {
		counter.setCounts(countries);
	}
};

