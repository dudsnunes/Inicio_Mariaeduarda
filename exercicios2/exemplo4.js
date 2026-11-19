// Incio do programa
const rls = require("readline-sync")

let base = 0
let altura = 0

function leitura (){
    base = rls.questionFloat("Digite a base:")
    altura = rls.questionFloat("Digite a altura:")
}

function dobroBase(base){
    return (base * 2)
}

function dobroAltura(altura){
    return (altura * 2)
}

function perimetro(resBase, resAlt){
    return (resBase + resAlt)
}

function principal (){
    leitura()
    let resBase = dobroBase(base)
    let resAlt = dobroAltura(altura)
    let resultado = perimetro(resBase, resAlt)


    console.log (`Sua área é de: ${resultado}`)
}

principal()

// FIm do programa