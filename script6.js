// Stampa le potenze di 2 senza superare il numero 1000.
var potenzeDue = [2];
var base = 2;
for (var i = 0; i < 10000; i++) {
    var potenzaCorrente =  potenzeDue[i];
    var base = 2 * base;
    if (base < 1000) {
        console.log(base);
    }
}
