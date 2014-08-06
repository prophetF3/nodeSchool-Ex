var arr = new Array (process.argv.length);

for (var i = 0; i < arr.length; i++) {
	arr[i] = parseInt(process.argv[i]);
};

var arr_int = arr.slice(2);

var result = arr_int.reduce(function (previousValue, currentValue, index, array){
	return previousValue + currentValue;
});

console.log(result);

// without array
// var result = 0
// 
//     for (var i = 2; i < process.argv.length; i++)
//       result += Number(process.argv[i])
// 
//     console.log(result)