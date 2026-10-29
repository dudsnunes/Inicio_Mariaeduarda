// Incio do programa

const limiteCredito = 500.00
const valorCompra = 120.00

const compraAprovada = valorCompra <= limiteCredito
const estoqueCritico = valorCompra > 1000

console.log ("O saldo é suficiente? " + compraAprovada)
console.log ("Ativou o alerta de estoque? " + estoqueCritico)

const idRegistrado = 2026
const idDigitado = "2026"

const igualdadeAmpla = idRegistrado == idDigitado
const igualdadeEstrita = idRegistrado === idDigitado

console.log ("Os IDs são iguais na comparação? " + igualdadeAmpla)
console.log ("Os IDs também são iguais no tipo? " + igualdadeEstrita)

// FIm do programa