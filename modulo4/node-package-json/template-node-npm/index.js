//exercicios
// a- atraves do  process.argv

//const dados =require("./index")
const valorTerminal = process.argv[2]
const valorTerminal2 = process.argv[3]
const somaIdade = Number(valorTerminal2 + 7)

// b-
console.log(`Olá, ${valorTerminal} voce tem ${valorTerminal2} anos`)
//c-
console.log(`ola ${valorTerminal} voce tem ${valorTerminal2} anos, daqui sete anos voce tera ${somaIdade}`)


