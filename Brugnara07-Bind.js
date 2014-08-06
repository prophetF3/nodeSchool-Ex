var async = require('async');

var Calc = function(item) {
  this.item = item;
};

Calc.prototype.clear = function(cb) {
  this.item = -1;
  cb();
};

// fixa il codice che SEGUE. Perché non funziona?

var calc = new Calc(10);

var check = function(cb) {
  if (calc.item != -1) {
    return cb(new Error('WRONG!'));
  }
  cb(null);
};

async.series([
  calc.clear.bind(calc),  
  check
], function(err) {
  if (err) {
    console.error(err);
  } else {
    console.error('BRAO!');
  }
});