// exercicio de  interpretação
/**1. esta fazendo a contagem a partir do 0 ate o 5 e incrementando 
 para que itere entre todos os numeros ate 5, o resultado é 10
let valor = 0
for(let i = 0; i < 5; i++) {
  valor += i
}
console.log(valor)
*/
//2. 
/** 
const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
for (let numero of lista) {
  if (numero > 18) {
	console.log(numero)
	}
} 
//a.[19,21, 23, 25, 27, 30]
//b. não
*/
// 3.
/** O console ira imprimir a primeira linha "*" segunda "**"
terceira "***" quarta "****"
 
const quantidadeTotal = Number(prompt("Digite a quantidade de linhas: "))
let quantidadeAtual = 0
while(quantidadeAtual < quantidadeTotal){
  let linha = ""
  for(let asteriscos = 0; asteriscos < quantidadeAtual + 1; asteriscos++){
    linha += "*"
  }
  console.log(linha)
  quantidadeAtual++
  */
 

  //EXERCICIO DE ESCRITA
  //1. 

  const listaAnimais = [];
   
  const animaisDeEstimacao = Number(prompt("quantos animais de estimação você tem ?"))
    if (animaisDeEstimacao === 0){
    console.log("Que pena! você pode adotar um pet!")
    } else {
    for(let i = 0; i < animaisDeEstimacao; i++) {
     let nomeDosAnimais = prompt("Digite o nome dos seus animais")
    listaAnimais.push(nomeDosAnimais)
    } 
        console.log(listaAnimais)
    } 

//2.a

let arrayOriginal = [20, 100, 3, 50]
function contarArray (){
for (let elemento of arrayOriginal){

 console.log(elemento)
}
}
contarArray(arrayOriginal)


//b.

let arrayOriginal=[20, 100, 3, 50]
function dividirArray(){
let resultado = 0
 for (let divididos of arrayOriginal){
resultado = divididos / 10
    console.log (resultado)
}
}
dividirArray(arrayOriginal)

//c.

let arrayDePares=[]
let arrayOriginal = [20, 100, 3, 50]
function criarArray (){
let resultado = 0
for(let i = 0; i < arrayOriginal; ++i){
if (arrayOriginal % arrayOriginal === 0){
resultado = arrayOriginal
     console.log(resultado)
}
}  
}
criarArray(resultado)

//d.

let arrayOriginal =[10, 100, 3, 50]

function criarArray(){
for(let i = 0; i < arrayOriginal.length; i++){
console.log([`O elemento do index ${i} é : ${arrayOriginal}`])

        
}
}
criarArray()


//e.
let arrayOriginal =[10, 100, 3, 50]
let valorMaximo = 40
let valorMinimo = 15
function maiorEMenor (array){
for(let i = 0; i < array.length; i++){
 if(array[i] > valorMaximo){
valorMaximo = array[i]
console.log(`O maior numero é ${valorMaximo}`)
}
    }
}
maiorEMenor(arrayOriginal)

let arrayOriginal =[10, 100, 3, 50]
let valorMaximo = 40
let valorMinimo = 5
function maiorEMenor (){
    for(let i = 0; i < arrayOriginal.length; i++){
    if ( valorMinimo < arrayOriginal[i]){
console.log(`o menor numero é: ${valorMinimo}`)
    }

    }
}
maiorEMenor