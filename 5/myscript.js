// Crea un array vuoto. Chiedi per 6 volte all’utente di inserire un numero,
// se è dispari inseriscilo nell’array.

// creo array vuoto
var array = [];
console.log(array);

// apro un ciclo while con il prompt dentro per chiedere 6 numeri
i = 0;
while (i < 6){
  var numero = parseInt(prompt('Inserisci un numero'));
  console.log(numero);
  // se il numero inserito è dispari popolo l'array
  if (numero % 2 !== 0)
    array.push(numero);
    console.log(array);
  i++;
}
