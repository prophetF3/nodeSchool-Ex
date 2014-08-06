var expect = require('chai').expect;

var arr = [1, 2, 3, 4];

// fn should filter odd numbers.
var fn = function(item) {
	return item % 2;
};

var filtered = arr.filter(fn);

expect(filtered.length).to.equal(2);
