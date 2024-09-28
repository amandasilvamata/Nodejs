// Semana 02 Node.js

// Hora do desafio 02

let anoNas = 2000, statusConta = true, restriCredito = false, statusSistema = false, acesso = false;


console.log(`Bem-vindo(a) ao nosso sistema bancário!`)

function permissaoAcesso(anoNas,statusConta, restriCredito,statusSistema){

    let idade = 2024 - anoNas
    if (idade < 18 ){
        console.log(`Você é menor de idade! Para acessar o nosso sistema é necesário ter 18 anos ou mais`)
    }
    if ((idade >= 18) && statusConta == true && restriCredito == false && statusSistema == false){
         acesso = true
    } else {
        acesso = false
    }
    return acesso
    

}

acesso = permissaoAcesso(anoNas,statusConta, restriCredito,statusSistema)

if (acesso == true){
    console.log(`Acesso concedido!\n Ano de nascimento: ${anoNas}\n Conta ativa: ${statusConta}\n Restrição de crédito: ${restriCredito}\n Sistema em manuntenção: ${statusSistema}`)
}else{
    console.log(`Acesso negado!\n Ano de nascimento: ${anoNas}\n Conta ativa: ${statusConta}\n Restrição de crédito: ${restriCredito}\n Sistema em manuntenção: ${statusSistema}`)
}
