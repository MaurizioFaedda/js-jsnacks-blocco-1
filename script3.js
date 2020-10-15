// Il software deve chiedere per 5 volte all’utente di inserire un
// numero. Il programma stampa la somma di tutti i numeri
// inseriti.

// array di tutti i numeri che l'utenta inserirà
var numeri = []

// decido il mio length
var numeroNumeri = 5;


//chiedo all'utente di inserire un numero n volte con for e salvo il dato con un prompt
for (var i = 0; i < numeroNumeri; i++) {
    numeri.push(parseInt(prompt("inserisci un numero")));
}

// calcolo e stampo la somma dei numeri inseriti dall'utente utilizzando reduce
console.log(
  numeri.reduce((a, b) => a + b, 0)
)
