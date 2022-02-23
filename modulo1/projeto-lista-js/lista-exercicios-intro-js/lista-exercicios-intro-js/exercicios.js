// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
  const altura = prompt("Digite a altura do retângulo")
  const largura = prompt("Digite a largura do retângulo")
  const resultado = altura * largura;
 
  console.log(resultado)
  // implemente sua lógica aqui
}


// EXERCÍCIO 02
function imprimeIdade() {
  const anoAtual = prompt("Qual ano estamos ?")
  const anoDeNascimento =prompt("Qual ano voçe nasceu ?")
  let resultado = anoAtual - anoDeNascimento

  console.log(resultado)
  // implemente sua lógica aqui

}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  let imc = peso/ (altura * altura)
  return imc

  // implemente sua lógica aqui
}


// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  const nome = prompt("Qual é seu nome ?")
  const idade = prompt("Diga sua idade?")
  const email = prompt("Digite seu email")
  let resposta = (`Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`)
   
  console.log(resposta)
  // implemente sua lógica aqui
  // "Meu nome é NOME, tenho IDADE anos, e o meu email é EMAIL."

}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  let corFavorita1 = prompt("Diga a sua primeira cor favorita")
  let corFavorita2 = prompt("Digite a sua segunda cor favorita ")
let corFavorita3 = prompt("Digite sua terceira cor favorita")
let resultado = [corFavorita1, corFavorita2, corFavorita3]
console.log(resultado)
  // implemente sua lógica aqui

}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  return string.toUpperCase()
  // implemente sua lógica aqui

}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
 return custo / valorIngresso
 // implemente sua lógica aqui

}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  return string1.length === string2.length
  
  // implemente sua lógica aqui

}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  return array[0]
  // implemente sua lógica aqui

}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  return array[array.length - 1]
  // implemente sua lógica aqui

}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  let troca = array[0]
  let troca1 = array[array.length - 1]
  array[0]= troca1
  array[array.length -1]= troca
  return array 
  // implemente sua lógica aqui

}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  return string1.toUpperCase() === string2.toUpperCase()
  // implemente sua lógica aqui

}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui

}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui

}