// Il software deve chiedere per 5 volte all’utente di inserire un numero. Il programma stampa la somma di tutti i numeri inseriti. Esegui questo programma in due versioni, con il for e con il while.

var somma = 0;

// for (i = 0; i < 5; i++) {
//   var numero = parseInt(prompt('inserisci un numero'));
//   console.log(numero);
//   somma = somma + numero; // somma += numero
//   console.log('aggregato: ' + somma);
// }

i = 0;
while(i < 5) {
    var numero = parseInt(prompt('inserisci un numero'));
    console.log(numero);
    somma = somma + numero; // somma += numero
    console.log('aggregato: ' + somma);
  i++;
}

console.log(somma);
document.getElementById('id').innerHTML = 'la somma è = ' + somma;
