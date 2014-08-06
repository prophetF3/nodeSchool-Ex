/**
 * Created by macuser on 23/07/14.
 */
/* Usando il modulo vrutils incluso filtra l'array.
 Il modulo fornisce fra le tante, la funzione:

 isDivisibleBy(item, number,callback).
 dove callback ha la seguente struttura:
 callback(err, isDivisible);

 SCOPO: filtrare l'array dato, in modo che il risultante abbia al suo interno soli numeri divisibili per 3!
 HINT: entrambe le funzioni sono asyncrone!!!

 /*
 Fatta questa parte, se l'avrete capita e fatta già entro domani, potrete fare anche la seconda parte dell'esercizio,
 ovvero mappare l'array in modo che in uscita ci siano degli oggetti ritornati dalla getJson().
 Per fare sia il primo che il secondo esercizio, dovrete leggere sicuramente la documentazione di async.
 OCIO. La getJson richiede che abbiate avviato il server http: /exercises/advanced/00-httpserver.js
  */

var vrutils = require('./vrutils');
var async = require('async');

// esempio utilizzo 1
vrutils.isDivisibleBy(6, 2, function(err, isDivisible) {
    console.log(isDivisible);
});

// esempio 2
vrutils.getJson('pippo', function(err, json) {
    console.error(err);
    console.log(json);
});

var array = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];

// QUI IL TUO CODICE!

async.filter(array, function(item, cb){
    vrutils.isDivisibleBy(item, 3, function(err, isDivisible){
        cb(isDivisible);
    })
}, function(filtered_array){
    console.log(filtered_array);
});

async.map(array, function(item, cb){

}, function(){});