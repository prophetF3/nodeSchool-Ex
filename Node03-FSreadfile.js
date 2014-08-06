var fs = require('fs');
var path = process.argv[2];
var numberOfLines = 0;
var arr  = [];

arr = fs.readFileSync(path).toString();

for (var i = 0; i < arr.length; i++) {
	if (arr[i] == '\n') {
		numberOfLines += 1;
	};
};

console.log(numberOfLines);


// Soluzione proposta:
// 
// ────────────────────────────────────────────────────────────────────────────
//     var fs = require('fs')
// 
//     var contents = fs.readFileSync(process.argv[2])
//     var lines = contents.toString().split('\n').length - 1
//     console.log(lines)
// 
//     // note you can avoid the .toString() by passing 'utf8' as the
//     // second argument to readFileSync, then you'll get a String!
//     //
//     // fs.readFileSync(process.argv[2], 'utf8').split('\n').length - 1