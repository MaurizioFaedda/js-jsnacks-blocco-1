// Crea un array vuoto. Chiedi per 6 volte all’utente di inserire
// un numero, se è dispari inseriscilo nell’array.

var numeri = [];
var contaNumeri = 6;


for (var i = 0; i < contaNumeri; i++) {

    var numeroInserito = numeri[i];

    var numeroInserito = parseInt(prompt("inserisci un numero"));
    var numeroPari = numeroInserito % 2;
    if (numeroPari != 0){
        numeri.push(numeroInserito);
    }
}

console.log(numeri);
