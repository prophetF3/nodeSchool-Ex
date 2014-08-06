// get input from I/O. The input string is passed as second argument. 
var sentence = [];
var wordObj = {};

for (var i = 2; i < process.argv.length; i++) {
	sentence.push(process.argv[i]);
};

var findString = function (arr, string){
	arr.forEach(function(item){
		if (wordObj[item] != null) {
			wordObj[item] ++;
		}
		else {
			wordObj[item] = 1;
		}
	});
	console.log(wordObj);
};

findString(sentence);
