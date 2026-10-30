// Inicio do programa

const produto = "Notebook"
const preco = 3500.00

//contratenando
//resumo = "O preço do " + produto + " é R$ " + preco

//Interpolação de texto (String) com crase
resumo = `O valor do ${produto} é R$ ${preco.toFixed(2)}`

console.log (resumo)

// FIm do programa
