// exercicio de interpretação
/**  1. 
const bool1 = true
const bool2 = false
const bool3 = !bool2

let resultado = bool1 && bool2
console.log("a. ", resultado) // a. false

resultado = bool1 && bool2 && bool3 
console.log("b. ", resultado) // b. false

resultado = !resultado && (bool1 || bool2) 
console.log("c. ", resultado) // c. true

console.log("d. ", typeof resultado) // d. booleano
**/

 /** // 2.
let primeiroNumero = prompt("Digite um numero!")
let segundoNumero = prompt("Digite outro numero!")

const soma = primeiroNumero + segundoNumero
console.log(soma) // houve uma concatenação e em vez de somar ajuntou os dois numeros, 
pois prompt sempre imprimi como string, sera necessaria conversão de tipos**/

// 3. 
 /** 
const soma = Number(primeiroNumero) + Number(segundoNumero)
console.log (soma) // acrescentar a conversão de tipos Number para converter a string para numeros

*/ 





// exercicio de escrita
// 1
let idade = prompt("Digite sua idade")
let idadeDoAmigo = prompt("Digite a idade do seu amigo")
let resultado = Number(idade) > Number(idadeDoAmigo)
console.log("Sua idade é maior do que a do seu amigo ?", resultado)
console.log ("A diferença de idade é:", idade - idadeDoAmigo, "Anos")

// 2. 
let numeroPar = prompt("Digite um numero par")
let resultado = Number(numeroPar % 2)
console.log("O resto do numero par dividido por 2 é:", resultado)
// o resultado do resto sempre dara 0 quando o numero for par

// o resultado do resto sempre dara 1 quando o numero for impar
**/

//3.

let idadeEmAnos = prompt("Qual sua idade ?")

console.log("idade em meses:", Number(idadeEmAnos) * 12)
console.log ("idade em dias:", Number(idadeEmAnos) * 365)
console.log ("idade em horas:", Number(idadeEmAnos) * 24 * 365)



//4 

let primeiroNumero = prompt("Digite um numero")
let segundoNumero = prompt("Digite o segundo numero")
 console.log("O primeiro numero é maior que o segundo ?", 
 Number(primeiroNumero) > Number(segundoNumero))
console.log("O primeiro numero é igual ao segundo?", 
Number(primeiroNumero) === Number(segundoNumero))
console.log("O primeiro numero é divisivel pelo segundo ?", Number(primeiroNumero) % Number(segundoNumero) === 0) 
console.log ("O segundo numero é divisivel pelo primeiro ?", Number(segundoNumero) % Number(primeiroNumero) === 0)
