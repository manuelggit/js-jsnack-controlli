// Il software deve chiedere per 5 volte all’utente di inserire un numero. Il programma stampa la somma di tutti i numeri inseriti. Esegui questo programma in due versioni, con il for e con il while.

var somma = 0;

for (i = 0; i < 5; i++) {
  var numero = parseInt(prompt('inserisci un numero'));
  console.log(numero);
  somma = somma + numero; // somma += numero
  console.log('aggregato: ' + somma);
}

console.log(somma);
