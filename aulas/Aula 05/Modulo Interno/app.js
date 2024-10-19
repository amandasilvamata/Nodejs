const readline = require('readline');

// Criando uma interface para ler entrada e saída do terminal
const rl = readline.createInterface({
    input: process.stdin, // captura a entrada do terminal
    output: process.stdout // exibe saída no terminal
});

// Faz uma pergunta ao usuário
rl.question('Qual é o seu nome? ', (nome) => {
    console.log(`Olá, ${nome}!`);
    rl.close(); // fecha a interface após a resposta
});
