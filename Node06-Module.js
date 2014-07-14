var path = require('path');
var fs = require('fs');

module.exports = function(path_input, filtro, callback){
	fs.readdir(path_input, function(err, files){
		var arr = [];
		if (err) 
			return callback(err);
		files.forEach(function (file){
			if (path.extname(file) == filtro) {
				arr.push(files);
			};
		});
		callback(null, arr);
	});
};

