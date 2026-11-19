// Incio do programa
const rls = require("readline-sync")

let num1 = 0
let num2 = 0

function leitura (){
    num1 = rls.questionFloat("Digite o primeiro número:")
    num2 = rls.questionFloat("Digite o segundo número:")
}

function soma(num1, num2){
    return (num1 + num2)
}

function media(valorSoma){
    return (valorSoma/2)
}

function principal (){
    leitura()
    let resultadoSoma = soma(num1, num2)
    let resposta = media(resultadoSoma)


    console.log (`O resultado da média é de: ${resposta}`)
}

principal()

// FIm do programa