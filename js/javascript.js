let eta;
let distanza;
let prezzo;


eta = pront("dimmi la tua età espressa in numeri");

if (!isNaN(eta)){

    distanza = pront("dimmi quanti chilometri devi fare espressa in numeri");

    if(!isNaN(distanza)){

        prezzo = distanza * 0.21;

        if(eta >= 65)
        {
            prezzo = prezzo - ((prezzo / 100) * 40);
            console.log(prezzo.toFixed(2));
        }
        else if(eta < 18)
        {
            prezzo = prezzo - ((prezzo / 100) * 20);
            console.log(prezzo.toFixed(2));
        }
        else
        {
            console.log(prezzo.toFixed(2));
        }

    } else{
        console.log("ATTENZIONE hai scritto la tua distanza non a numeri, ricarica la pagina e riprova, ricominciando dalla tua età");
    }

} else{
    console.log("ATTENZIONE hai scritto la tua età non a numeri, ricarica la pagina e riprova.");
}