var expect = require('chai').expect;

var sum = require('./12-module-sum');
console.log(sum(1, 3));

// cache dei moduli!!
var calc = require('./12-module-calc');
var diff = require('./12-module-calc').diff;
console.log(calc.sum(1, 3));
console.log(calc.diff(3, 2));
console.log(diff(3, 2));

// modulo come classe, utile per inheritance
var Calc = require('./12-module-class');

var c = new Calc(5, 4);
console.log(c.sum());
console.log(c.diff());

var c2 = new Calc(5, 4);
console.log(c2.sum());
console.log(c2.diff());


// Troverai il tuo metodo migliore per scrivere un modulo.
// Ora però, implementa i metodi per e diviso (con controllo /0 che deve restituire null) per il modulo 	
// decommentando queste funzioni, dovrà funzionare correttamente tutto (non dare errori)

expect(calc.product(5, 4)).to.equal(20);
expect(calc.diviso(30, 5)).to.equal(6);
expect(calc.diviso(30, 0)).to.be.null;