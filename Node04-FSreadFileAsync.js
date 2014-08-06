var fs = require('fs');
var numberOfLines = 0;
var path = process.argv[2];

fs.readFile(path, function (err, file) {
  if (err) throw err;
  numberOfLines = file.toString().split('\n').length -1;
  console.log(numberOfLines);
});


// Soluzione proposta: 
// 
// var fs = require('fs')
//     var file = process.argv[2]
// 
//     fs.readFile(file, function (err, contents) {
//       // fs.readFile(file, 'utf8', callback) can also be used
//       var lines = contents.toString().split('\n').length - 1
//       console.log(lines)
//     })