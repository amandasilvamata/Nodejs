
// geralmente usa o mesmo nome do modulo

const http = require('http')



http.createServer((req,res)=>{
    res.end('Hello World Servidor!')
}).listen(8081,()=>{
    console.log('Servidor Rodando')
}) //localhost:8081
