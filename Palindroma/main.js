// chiedere all utente  di inserire una parola

const parolaUtente = prompt("Inserisci una parola")

// creare una funzione per capire se  la parola inserita e palindroma
function palindroma (parolaInseritaDallUtente){
    // creare l array per contenere lettera per lettera
    
    
    // scomporre la parola inserita in lettera per lettera
    // parolaInseritaDallUtente.split("")
    // controllo lunghezza della parola dopo aver diviso le lettere
    console.log('lunghezza della parola e di ' + parolaInseritaDallUtente.length + " caratteri" );

    const parolaScomposta = []
    let parolaRicompostaAlContrario =""

// creare il ciclo per pushare le lettere al contrario
    for( let i=0; i<parolaInseritaDallUtente.length; i++){

    // pushare sempre prima gli ultimi elementi rispetto a quelli venuti prima che corrispondono a [i]
    parolaScomposta.unshift(parolaInseritaDallUtente[i]);
    
    // ricomponiamo la stringa dall array parolaScomposta
    parolaRicompostaAlContrario = (parolaScomposta.join(''))
    

    }  
    console.log("la parola composta al contrario e " + parolaRicompostaAlContrario);
// condizione che se e palindroma scrive "ok" altrimenti "non e palindroma"
    if(parolaRicompostaAlContrario === parolaUtente){
        console.log("ok la parola e palindroma")
    }else{console.log("la parola che hai inserito non e palindroma")
    }
}





console.log(parolaUtente);


palindroma(parolaUtente)