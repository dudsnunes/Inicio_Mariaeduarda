// Incio do programa
const rls = require("readline-sync")

let raio = 0

function leitura (){
    raio = rls.questionFloat("Digite o raio:")
}

function diametro(raio){
    return (raio * 2)
}

function principal (){
    leitura()
    let resultado = diametro(raio)


    console.log (`O diâmetro é de: ${resultado}`)
}

principal()

// FIm do programa