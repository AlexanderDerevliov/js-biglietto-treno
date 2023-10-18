
// step 1

const numKm = Number (prompt (`Inserire la distanza che si vuole percorrere`));
console.log (numKm, typeof numKm);

document.getElementById (`km`) .innerHTML = `La distanza selezionata è: ${numKm} km`;


// step 2

const age = Number (prompt (`Inserisci qui la tua età`));
console.log (age, typeof age);

document.getElementById (`user_age`) .innerHTML = `l'età che hai inserito è: ${age} anni`;


// step 3


let ticketPrice = (numKm * 0.21) .toFixed (1) ;

document .getElementById (`totalprice`) .innerHTML = `il prezzo iniziale del tuo biglietto è: ${ticketPrice} euro`;


// step 4

if (age < 18) {
  
    ticketPrice = ticketPrice - (ticketPrice / 100 * 20) .toFixed (1) ;

    document .getElementById (`discount`) .innerHTML = `Congratulazioni, hai lo sconto riservato agli under 18`;

    // controllo

    console.log (ticketPrice)


} else if (age >= 65) {

    ticketPrice = ticketPrice - (ticketPrice / 100 * 40) .toFixed (1) ;

    document .getElementById (`discount`) .innerHTML = `Congratulazioni, hai lo sconto riservato agli over 65`;
    
    // controllo 2

    console.log (ticketPrice)

} else {

    document .getElementById (`discount`) .innerHTML = `Ci dispiace, non hai diritto a nessun tipo di sconto`;

    console.log (ticketPrice)
}

// messaggio finale con prezzo

document .getElementById (`price`) .innerHTML = `Il prezzo del finale del suo biglietto è: ${ticketPrice} euro`;

