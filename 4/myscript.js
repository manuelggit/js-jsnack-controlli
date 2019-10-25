// In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby, chiedi all’utente il suo nome e comunicagli se può partecipare o no alla festa.

var lista = ["Paolo", "Giacomo", "Marco", "Alessia", "Marta"]
console.log(lista);

var nuovo = prompt('Chi sei?');
console.log(nuovo);

nomeOk = false;

for(i = 0; i < lista.length; i++){
  if (nuovo === lista[i]) {
    nomeOk = true;
}
}

if(nomeOk === true){
  console.log('Puoi partecipare alla festa');
} else {
  console.log('Stai a casa');
}
