// L’utente inserisce due parole in successione, con due prompt. Il software stampa prima la parola più corta, poi la parola più lunga.

var p1 = prompt('inserisci una parola');
console.log('prima parola: ' + p1);
console.log('è lunga: ' + p1.length);

var p2 = prompt("inserisci un'altra parola");
console.log('seconda parola: ' + p2);
console.log('è lunga: ' + p2.length);

if (p1.length > p2.length) {
  console.log(p2 + ' ' + p1);
} else if (p1.length < p2.length){
  console.log(p1 + ' ' + p2);
} else {
  console.log('Le parole hanno la stessa lunghezza');
}
