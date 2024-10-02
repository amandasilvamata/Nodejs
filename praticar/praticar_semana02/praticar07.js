// Semana 02 Node.js


// Desafio 07

let produto = 250, precoFinal, descontoPorc = [0.05, 0.10, 0.15], desconto


function calculadora(i){
    desconto = (produto * descontoPorc[i])
    precoFinal = (produto - desconto)
}

if(produto <= 100){
   calculadora(0)
}else if(produto > 100 && produto <= 500){
    calculadora(1)
}else{
    calculadora(2)
}

console.log(`Preço original: R$ ${produto.toFixed(2)} \nDesconto: R$ ${desconto.toFixed(2)} \nPreço final: R$ ${precoFinal.toFixed(2)} `)

