// Semana 03 Node.js

// Hora do desafio 03

let  positivo = 0, negativo = 0, neutro = 0

const feedbacks = ['negativo', 'neutro', 'positivo', 'positivo', 'negativo', 'neutro', 'negativo', 'negativo', 'neutro', 'positivo', 'positivo', 'neutro', 'positivo', 'positivo', 'positivo', 'positivo', 'neutro', 'negativo', 'positivo', 'negativo', 'negativo', 'neutro', 'neutro', 'positivo', 'neutro', 'neutro', 'neutro', 'positivo', 'positivo', 'negativo', 'positivo', 'negativo', 'neutro', 'positivo', 'neutro', 'neutro', 'negativo', 'negativo', 'positivo', 'positivo', 'positivo', 'neutro', 'neutro', 'negativo', 'neutro', 'negativo', 'positivo', 'neutro', 'negativo', 'neutro', 'neutro', 'positivo', 'neutro', 'positivo', 'negativo', 'negativo', 'neutro', 'negativo', 'positivo', 'negativo', 'neutro', 'negativo', 'positivo', 'negativo', 'positivo', 'neutro', 'negativo', 'positivo', 'negativo', 'negativo', 'neutro', 'negativo', 'neutro', 'neutro', 'neutro', 'negativo', 'neutro', 'negativo', 'positivo', 'negativo', 'positivo', 'neutro', 'positivo', 'positivo', 'positivo', 'neutro', 'positivo', 'positivo', 'negativo', 'positivo', 'negativo', 'neutro', 'negativo', 'neutro', 'negativo', 'neutro', 'negativo', 'positivo', 'negativo', 'neutro', 'negativo', 'positivo', 'positivo', 'negativo', 'positivo', 'neutro', 'positivo', 'positivo', 'positivo', 'negativo', 'negativo', 'positivo', 'positivo', 'positivo', 'neutro', 'neutro', 'positivo', 'positivo', 'negativo', 'negativo', 'negativo', 'negativo', 'negativo', 'positivo', 'negativo', 'neutro', 'positivo', 'positivo', 'neutro', 'negativo', 'negativo', 'positivo', 'positivo', 'neutro', 'positivo', 'positivo', 'neutro', 'positivo', 'neutro', 'neutro', 'negativo', 'negativo', 'negativo', 'positivo', 'neutro', 'neutro', 'negativo', 'neutro', 'positivo', 'positivo', 'neutro', 'negativo', 'neutro', 'negativo', 'negativo', 'positivo', 'neutro', 'positivo', 'negativo', 'positivo', 'neutro', 'negativo', 'neutro', 'neutro', 'positivo', 'positivo', 'neutro', 'negativo', 'negativo', 'neutro', 'neutro', 'negativo', 'negativo', 'neutro', 'positivo', 'positivo', 'neutro', 'positivo', 'positivo', 'negativo', 'positivo', 'positivo', 'positivo', 'negativo', 'negativo', 'positivo', 'positivo', 'negativo', 'positivo', 'negativo', 'positivo', 'negativo', 'positivo', 'positivo', 'negativo', 'neutro', 'positivo', 'negativo', 'positivo', 'positivo', 'negativo', 'positivo', 'positivo', 'neutro', 'positivo', 'positivo', 'negativo', 'positivo', 'positivo', 'positivo', 'negativo', 'negativo', 'positivo', 'positivo', 'neutro', 'positivo', 'positivo', 'positivo', 'positivo', 'positivo', 'negativo', 'neutro', 'negativo', 'positivo', 'neutro', 'positivo', 'positivo', 'positivo', 'neutro', 'positivo', 'positivo', 'negativo', 'positivo', 'negativo', 'neutro', 'negativo', 'neutro', 'negativo', 'neutro', 'negativo', 'positivo', 'negativo', 'neutro', 'negativo', 'positivo', 'positivo', 'negativo', 'positivo', 'neutro', 'positivo', 'positivo', 'positivo', 'negativo', 'negativo', 'positivo', 'positivo', 'positivo', 'neutro', 'neutro', 'positivo', 'positivo', 'negativo', 'negativo', 'negativo', 'negativo', 'negativo', 'positivo', 'negativo', 'neutro', 'positivo', 'positivo', 'neutro', 'negativo', 'negativo', 'positivo', 'positivo', 'neutro', 'positivo', 'positivo', 'neutro', 'positivo', 'neutro', 'neutro', 'negativo', 'negativo', 'negativo', 'positivo', 'neutro', 'neutro', 'negativo', 'neutro', 'positivo', 'positivo', 'neutro', 'negativo', 'neutro', 'negativo', 'negativo', 'positivo', 'neutro', 'positivo', 'negativo', 'positivo', 'neutro', 'negativo', 'neutro', 'neutro', 'positivo', 'positivo', 'neutro', 'negativo', 'negativo', 'neutro', 'neutro', 'negativo', 'negativo', 'neutro', 'positivo', 'positivo', 'neutro', 'positivo', 'positivo', 'negativo', 'positivo', 'neutro', 'positivo', 'positivo', 'positivo', 'neutro', 'positivo', 'positivo', 'negativo', 'positivo', 'negativo', 'neutro', 'negativo', 'neutro', 'negativo', 'neutro', 'negativo', 'positivo', 'negativo', 'neutro', 'negativo', 'positivo', 'positivo', 'negativo', 'positivo', 'neutro', 'positivo', 'positivo', 'positivo', 'negativo', 'negativo', 'positivo', 'positivo', 'positivo', 'neutro', 'neutro', 'positivo', 'positivo', 'negativo', 'negativo', 'negativo', 'negativo', 'negativo', 'positivo', 'negativo', 'neutro', 'positivo', 'positivo', 'neutro', 'negativo', 'negativo', 'positivo', 'positivo', 'neutro', 'positivo', 'positivo', 'neutro', 'positivo', 'neutro', 'neutro', 'negativo', 'negativo', 'negativo', 'positivo', 'neutro', 'neutro', 'negativo', 'neutro', 'positivo', 'positivo', 'neutro', 'negativo', 'neutro', 'negativo', 'negativo', 'positivo', 'neutro', 'positivo', 'negativo', 'positivo', 'neutro', 'negativo', 'neutro', 'neutro', 'positivo', 'positivo', 'neutro', 'negativo', 'negativo', 'neutro', 'neutro', 'negativo', 'negativo', 'neutro']

for (let i = 0; i < feedbacks.length; i++){
    if(feedbacks[i] == 'positivo'){
        positivo++
    }else if(feedbacks[i] == 'negativo'){
        negativo++
    }else if(feedbacks[i] == 'neutro'){
        neutro++
    }
}



const porcentPositivo = (positivo / feedbacks.length) * 100
const porcentNegativo = (negativo / feedbacks.length) * 100
const porcentNeutro = (neutro / feedbacks.length) * 100

console.log(`A empresa teve um total de ${feedbacks.length} feedbacks. \nTendo como resultado positivo: ${positivo} representando ${porcentPositivo.toFixed(2)}% dos votos. \nNegativo: ${negativo} representando ${porcentNegativo.toFixed(2)}% dos votos. \nNeutro: ${neutro} representando ${porcentNeutro.toFixed(2)}% dos votos`)
