//Inicio do programa

let estoqueCamisa = 50
const procoUnitario = 49.90

console.log ("Estoqur inicial: " + estoqueCamisa + " unidades. ")

let qtdaVendida = 3

estoqueCamisa -= qtdaVendida

let valorVenda = qtdaVendida * procoUnitario

console.log ("   Venda Realizada   ")
console.log ("Camisetas restantes no estoque: " + estoqueCamisa)
console.log ("Valor total faturado: R$ " + valorVenda.toFixed(2))

//Fim do programa