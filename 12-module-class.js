var Calc = function(a, b) {
  this.type = 'scentific';
  this.a = parseFloat(a);
  this.b = parseFloat(b);
  console.log('Instantiated Calc()');
};

Calc.prototype.sum = function() {
  return this.a + this.b;
};

Calc.prototype.diff = function() {
  return this.a - this.b;
};

Calc.prototype.product = function(){
	return this.a * this.b;
};

module.exports = Calc;