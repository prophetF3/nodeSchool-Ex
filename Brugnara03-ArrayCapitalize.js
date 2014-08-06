var expect = require('chai').expect;

Array.prototype.capitalyze = function() {
	var risultato = this.map(function(risultato){
		return risultato.toString().charAt(0).toUpperCase() + risultato.slice(1);
	});
	return risultato;
};

var arr = 'ciao come va'.split(' ');

expect(arr.capitalyze().join(' ')).to.equal('Ciao Come Va');
