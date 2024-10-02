// Semana 02 Node.js


// Desafio 08

let peso = 70, altura = 1.75, classificacao

imc = peso/(altura**2)

if(imc< 18.5){
    classificacao = `Abaixo do peso`
}else if(imc >= 18.5 && imc <= 24.9){
    classificacao = `Peso normal`
}else if(imc >= 25 && imc <= 29.9){
    classificacao = `Sobrepeso`
}else{
    classificacao = `Obesidade`
}

console.log(`Seu IMC é: ${imc.toFixed(1)}. Classificação: ${classificacao}`)
