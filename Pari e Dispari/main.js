debugger


// chiedere all utente di decidere pari o dispari
const userChoice = prompt("scegli pari o dispari")
// chiedere di inserire un numero da 1 a 5 
const userNumberChoice = parseInt(prompt("scegli un numero compreso tra 1 e 5"))

// generiamo un numero random compreso tra 1 - 5 per il Computer
function generatoreN (){

    const numeroGenerato = (Math.floor(Math.random()*5));
    return numeroGenerato 
    
}


const numberGenerated = generatoreN()

console.log(numberGenerated , userNumberChoice); 


function somma (numerodelpc , numeroUser){

    const sommaDueNumeri = numerodelpc + numeroUser
    return sommaDueNumeri
}

somma(numberGenerated,userNumberChoice)

const risultatoSomma = somma(numberGenerated,userNumberChoice)

console.log(somma(numberGenerated,userNumberChoice));


let pari = 0

if( risultatoSomma %2 === 0){

}else{
    pari = -1
}



if(userChoice === "pari"){
    
}


