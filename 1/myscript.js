// L’utente inserisce due numeri in successione, con due prompt. Il software stampa il maggiore.



var num1 = parseFloat(prompt('Scrivi un numero'));
console.log('num1 = ' + num1);

// num1 = num1.replace(',','.');

var num2 = parseFloat(prompt('Scrivi un altro numero'));
console.log('num2 = ' + num2);

// num2 = num2.replace(',','.');

if(num1 > num2){
  console.log('Il numero maggiore è: ' + num1)
  document.getElementById('mioid').innerHTML = 'Il numero maggiore è: ' + num1;
} else if(num1 < num2) {
  console.log('Il numero maggiore è: ' + num2)
  document.getElementById('mioid').innerHTML = 'Il numero maggiore è: ' + num2;
} else {
  console.log('Sono uguali');
  document.getElementById('mioid').innerHTML = 'Sono uguali';
}
