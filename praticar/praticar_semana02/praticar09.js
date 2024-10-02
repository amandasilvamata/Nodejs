// Semana 02 Node.js


// Desafio 09

let ano = 2031

if(ano % 4 === 0 && ano % 100 !== 0){
    //if(ano % 100 != 0)
    console.log(`ano bissexto`)
}else if(ano % 100 === 0 && ano % 400 === 0){
    console.log(`ano bissexto`)
}else{
    console.log(`ano não é bissexto`)
}
