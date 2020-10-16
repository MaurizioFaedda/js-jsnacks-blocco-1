// Stampa il cubo dei primi N numeri, dove N è un numero
// indicato dall’utente.

var numeri = [];
var contaNumeri = parseInt(prompt("Inserisci un numero"))
;
for (var i = 1; i <= contaNumeri; i++) {
    var numeroInserito = numeri[i];


    // con math.pow--------------------------
    var numeroCubo = Math.pow(i, 3);
    console.log(numeroCubo);

}
