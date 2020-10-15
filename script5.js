// Stampa il cubo dei primi N numeri, dove N è un numero
// indicato dall’utente.

var numeri = [];
var numeroUtente;
var contaNumeri = 3;

for (var i = 0; i < contaNumeri; i++) {
    var numeroInserito = numeri[i];
    var numeroInserito = parseInt(prompt("Inserisci un numero"));

    // due modi per calcolare una potenza con esponente 3

    // "a mano"--------------------------
    // var numeroCubo = numeroInserito * numeroInserito * numeroInserito;

    // con math.pow--------------------------
    var numeroCubo = Math.pow(numeroInserito, 3);
    console.log(numeroCubo);

}
