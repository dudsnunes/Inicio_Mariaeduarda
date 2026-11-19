// Incio do programa
const rls = require("readline-sync")

let f1 = 0
let f2 = 0

function leitura (){
    f1 = rls.questionFloat("Digite o primeiro número:")
    f2 = rls.questionFloat("Digite o segundo número:")
}

function mult(f1, f2){
    return (f1 * f2)
}

function principal (){
    leitura()
    let resposta = mult(f1, f2)

    console.log (`O resultado da multiplicação é: ${resposta}`)
}

principal()

// FIm do programa