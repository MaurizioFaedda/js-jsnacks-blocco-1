// Calcola la somma e la media dei numeri da 1 a 10.

var numeri = [];
var somma = 0;
for (var i = 1; i < 11; i++) {
    numeri.push(i);
    var numeroCorrente = numeri[i];
    somma = somma + i;
}

//var somma = numeri.reduce((a, b) => a + b, 0);

console.log(somma);

var media = somma / 10;

console.log(media);
