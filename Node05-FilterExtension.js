var fileReader = require('fs');
var path = require('path');

var path_directory = process.argv[2];
var filter = '.'+process.argv[3];

fileReader.readdir(path_directory, function(err, list_Files){
	if (err) throw err;
	list_Files.forEach(function (files_to_iterate){
		// fino a qui files_to_iterate è undefined perché se lo uso nella extname lui capisce che è un path?
		if(path.extname(files_to_iterate) == filter)
			console.log(files_to_iterate);	
	})
});
