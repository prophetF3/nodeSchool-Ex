var expect = require('chai').expect;

var arr = [1, 2, 3, 4];

// fn deve sommare i numeri moltiplicando per 2 quelli pari
// la reduce funziona ricorsivamente, quindi avremo inizialmente prev = 1 curr = 2, 
// successivamente, se volessi sommare tutti gli elementi di un array sarebbe prev = (prev+curr) e curr = 3 e così via... 
// ho deciso di implementare una funzione che effettua delle operazioni su elementi singoli e li raddoppia se pari, nulla altrimenti.
// successivamente eseguo una map, per effettura la isOdd su ogni elemento e alla fine la reduce per sommarli e ottenere il risultato atteso.

var isOdd = function(item){
	var doubleArr;
	if (item % 2) {
		doubleArr = item;
	}
	else doubleArr = item * 2;
	return doubleArr;
};

var fn = function(prev, curr){
	return prev + curr;
};

expect(arr.map(isOdd).reduce(fn)).to.equal(16);