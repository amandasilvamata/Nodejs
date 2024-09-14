// Semana 02 Node.js


// Desafio 06

totalAulas = 20
aulasParticipadas = 15

function calculoParticipacao(){
    resultado = ((aulasParticipadas/totalAulas)*100)
    return resultado
}



if(calculoParticipacao() >= 75){
    console.log(`8`)
}else if(calculoParticipacao() >= 50 && calculoParticipacao() <= 74){
    console.log(`6`)
}else{
    console.log(`0`)
}