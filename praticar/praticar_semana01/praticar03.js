// Semana 01 Node.js


// Desafio 03

let USD, BRL = 2563.6;

function conversorMoedas(BRL){
    USD = BRL / 5
    return USD
}
console.log(`O valor R$ ${BRL} em dólares é $ ${conversorMoedas(BRL).toFixed(2)}`)
