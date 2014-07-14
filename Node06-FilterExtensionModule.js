var file = require('./Node06-Module.js');
var path = require('path');
var filtro = process.argv[3];
var path_input = process.argv[2];

console.log(filtro);
console.log(path_input);

file(path_input,filtro,function(err, files){
	if (err) throw err;
	arr.forEach(function (files){
		if (path.extname(files) == '.' + process.argv[3])
			console.log(files);
	});
});