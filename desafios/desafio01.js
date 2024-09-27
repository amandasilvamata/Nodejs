// Semana 01 Node.js

// Hora do desafio 01 
let celsius = 26
let fahrenheit

function conversorFahrenheit(celsius){
    fahrenheit = (celsius * 9/5) + 32
    return fahrenheit
}

console.log(`A temperatura em graus Celsius é ${celsius}° e a temperatura em Fahrenheit é ${conversorFahrenheit(celsius)}°. `)
