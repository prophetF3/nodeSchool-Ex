var calc = {
  sum: function(a, b) {
    return parseFloat(a) + parseFloat(b);
  },
  diff: function(a, b) {
    return parseFloat(a) - parseFloat(b);
  }, 
  product: function(a, b){
  	return parseFloat(a) * parseFloat(b);
  },
  diviso: function(a, b){
  	if (b == 0) 
  		return null;
  	else 
  		return parseFloat(a) / parseFloat(b);
  }
};

console.log('Module calc loaded!');

module.exports = calc;