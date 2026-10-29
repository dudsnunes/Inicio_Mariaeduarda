// Inicio do programa

const temIdadePermitida = true
const possuiIdentidade = false
const temAutorizacaoDosPais = true

const podeEntrarSozinho = temIdadePermitida && possuiIdentidade

console.log (" Pode entrar desacompanhado? " + podeEntrarSozinho)

const possuiAcesso = podeEntrarSozinho || temAutorizacaoDosPais
console.log ("Possui autorização para evento? " + possuiAcesso)

const sistemaEmManutencao = false
const sistemaDisponivel = !sistemaEmManutencao
console.log ("O servidor está online? " + sistemaDisponivel)

// Fim do programa