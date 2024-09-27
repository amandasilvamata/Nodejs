// Semana 02 Node.js


// Desafio 03

let categoria = 1
let desconto = categoria * 10
let precoOriginal = 10

function calculoDesconto(){
    let resultado = `Preço Original: ${precoOriginal}, Desconto: ${desconto}%, Preço Final: R$${precoOriginal-((desconto*precoOriginal)/100)}`
    return resultado
}

if (categoria == 1 || categoria == 2 || categoria == 3 || categoria == 4){
    console.log(calculoDesconto())
}else{
    console.log(`Preço Original: R$${precoOriginal}, Desconto: não tem, Preço Final: R$${precoOriginal}`)
}
