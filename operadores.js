/*
var numero = 4

if(numero<1 || numero>3){
    console.log("verdadeiro")
}else{
    console.log("falso")
}
*/

var nota1 = 10
var nota2 = 10
var media = (nota1+nota2)/2

if(media >= 6 && media <=10){
    console.log(`A media é ${media} \nO aluno está aprovado`)
}else if(media >= 3 && media <6){
    console.log(`A media é ${media} \nO aluno está de recuperação`)
}else if(media >= 0 && media <3){
    console.log(`A media é ${media} \nO aluno está reprovado`)
}

