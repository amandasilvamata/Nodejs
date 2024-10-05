// Semana 04 Node.js

// Hora do desafio 04

class Livro{
    constructor(titulo, autor, anoPublicacao, disponivel){
        this.titulo = titulo
        this.autor = autor
        this.anoPublicacao = anoPublicacao
        this.disponivel = disponivel
    }
    exibirInformacoes(){
        console.log(`Título: ${this.titulo} \nAutor: ${this.autor} \nAno da publicação: ${this.anoPublicacao} \nDisponível: ${this.disponivel}`)
    }
    emprestar(){
        if(this.disponivel == true){
            console.log(`****** O livro ******\n`) 
            this.exibirInformacoes()
            console.log(`\n****** está disponível ******\n`)
            
            this.disponivel = false
        }else{
            console.log(`****** O livro ******\n`) 
            this.exibirInformacoes()
            console.log(`\n****** NÃO está disponível ******\n`)
        }
    }
    devolver(){
        this.disponivel = true
        console.log(`****** O livro ******\n`) 
            this.exibirInformacoes()
            console.log(`\n****** foi devolvido ******\n`)
    }
}

let livro1 = new Livro("Sapiens: Uma Breve História da Humanidade", "Yuval Harari", 2011, true)

let livro2 = new Livro("Breves respostas para grandes questões", "Stephen Hawking",2018, false )


livro1.exibirInformacoes()
console.log(`\n++++++++++++++++++++++++++++++++++\n`)
livro2.exibirInformacoes()
console.log(`\n++++++++++++++++++++++++++++++++++\n`)
livro1.emprestar()
console.log(`\n++++++++++++++++++++++++++++++++++\n`)
livro2.emprestar()
console.log(`\n++++++++++++++++++++++++++++++++++\n`)
livro2.devolver()
console.log(`\n++++++++++++++++++++++++++++++++++\n`)
livro2.emprestar()
console.log(`\n++++++++++++++++++++++++++++++++++\n`)
