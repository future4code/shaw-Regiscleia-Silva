1. // o primeiro console ira imprmir 10  e o segundo console 10, 5
2. // o console ira imprimir 10, 10, 10

3. /** let horasDeTrabalho = prompt("Quantas horas você trabalha por dia?")
let seuSalario = prompt("Quanto você recebe por dia?")
alert(`Voce recebe ${seuSalario/horasDeTrabalho} por hora`)**/ 
       

  //exercicio de escrita de codigos
  // exercicio 1
let nome = "Regiscleia"
let idade = 26
 console.log (typeof nome)
 console.log (typeof idade) //Undefined, pois as variaveis não tem um valor atribuido
 
 
 nome = prompt("Digite seu nome")
idade = prompt ("Digite sua idade")
console.log (typeof nome, typeof idade) // mesmo com a variavel idade sendo um numero, foi considerado do tipo string
console.log("Ola", nome,"voçe tem", idade, "anos")

// exercicio 2
 let comoEsta = "voçê esta bem ?"
 let qualidadeDoSono = "Esta dormindo bem ?"
 let planoAlimentar = "Esta realizando todas as refeições ?"
  
 let bemOuMal = "- sim"
 let sono = "- sim"
 let alimentacao = "- sim"
  console.log(comoEsta, bemOuMal)
  console.log (qualidadeDoSono, sono)
  console.log (planoAlimentar, alimentacao)

  // exercicio 3
  let a = 25
  let b = 10
  let c = b
  b = a
  a = c

  console.log("O novo valor de a é", a) // O novo valor de a é 10
console.log("O novo valor de b é", b) // O novo valor de b é 25
