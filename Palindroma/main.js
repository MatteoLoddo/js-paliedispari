// chiedere all utente  di inserire una parola

const parolaUtente = prompt("Inserisci una parola")

// creare una funzione per capire se  la parola inserita e palindroma
function palindroma (parolaInseritaDallUtente){

    // controllo lunghezza della parola
    console.log('lunghezza della parola e di ' + parolaInseritaDallUtente.length + " caratteri" );

    // creare l array per contenere lettera per lettera
    const parolaScomposta = []

    // creare la variabile che conterra l array  parolaScomposta in forma STRING
    let parolaRicompostaAlContrario =""

    // creare il ciclo per pushare le lettere al contrario
    for( let i=0; i<parolaInseritaDallUtente.length; i++){

    // pushare sempre prima gli ultimi elementi rispetto a quelli venuti prima che corrispondono a [i]
    parolaScomposta.unshift(parolaInseritaDallUtente[i]);
    
    // ricomponiamo la stringa dall array parolaScomposta
    parolaRicompostaAlContrario = (parolaScomposta.join(''))
    

    }  
    // controllo di come e scritta la parola al contrario
    console.log("la parola composta al contrario e " + parolaRicompostaAlContrario);
    // condizione che se e palindroma scrive "ok" altrimenti "non e palindroma"
    if(parolaRicompostaAlContrario === parolaUtente){

        console.log("ok la parola e palindroma")

    }else{console.log("la parola che hai inserito non e palindroma")
    }
}




// parola che inserisce l utente
console.log(parolaUtente);

// richiamo della funzione
palindroma(parolaUtente)