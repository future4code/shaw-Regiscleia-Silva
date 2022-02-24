// exercicios  de interpretação
//1.
/** 
const respostaDoUsuario = prompt("Digite o número que você quer testar")
const numero = Number(respostaDoUsuario)

if (numero % 2 === 0) {
  console.log("Passou no teste.")
} else {
  console.log("Não passou no teste.")
} //a. codigo esta perguntando ao usuario um numero e com esse numero colococou 
a condição de que se o resto do numero divisivel por dois é igual a zero. se sim uma resposta se não é outra resposta
e o  teste é para saber se o numero é par ou não.
//b. numeros pares
// c. numeros impares.
*/
// 2.
/** 
let fruta = prompt("Escolha uma fruta")
let preco
switch (fruta) {
  case "Laranja":
    preco = 3.5
    break;
  case "Maçã":
    preco = 2.25
    break;
  case "Uva":
    preco = 0.30
    break;
  case "Pêra":
    preco = 5.5 
    break; // BREAK PARA O ITEM c.
  default:
    preco = 5
    break;s
}
console.log("O preço da fruta ", fruta, " é ", "R$ ", preco)

//a.  Para que o usuario escolha uma fruta e tenha o valor da mesma
//b. "O preço da fruta, maça, é R$ 2.25"
//c. O preço da fruta Pêra, é R$ 5
*/
 
// 3.
/** 
const numero = Number(prompt("Digite o primeiro número."))

if(numero > 0) {
    console.log("Esse número passou no teste")
    let mensagem = "Essa mensagem é secreta!!!"
  }
  console.log(mensagem)
  
//a. esta perguntando e coletando um dado do usuario do tipo numero.
// b. se for 10  a mensagem ser "esse numero passouno teste"
se for -10 não aparece nenhuma mensagem.
// c. sim, apresentara um erro pois o segundo console esta fora do escopo
 da variavel mensagem, que deveria estar em um escopo global. 
 */


 // EXERCICIO DE ESCRITA
 //1.
 
 const idadeDoUsuario = Number(prompt("Digite sua idade."))
 let respostaDoUsuario = idadeDoUsuario
if(respostaDoUsuario >= 18 ){
 console.log("Você pode dirigir.")
}else{
console.log("você não pode dirigir.")
      }


//2.
 
const turnoQueEstuda = (prompt("Em que turno você estuda, digite M=matutino, V=vespertino, N=noturno"))
let respostaDoEstudante = turnoQueEstuda
    if (respostaDoEstudante.toUpperCase() === "M"){
    console.log("Bom Dia!")
    } else if (respostaDoEstudante.toUpperCase() === "V"){
    console.log("Boa Tarde !")
    }else{
     console.log("Boa Noite !")
    }


//3.

const turnoQueEstuda = (prompt("Em que turno você estuda, digite M=matutino, V=vespertino, N=noturno"))
let respostaDoEstudante = turnoQueEstuda

switch(respostaDoEstudante.toUpperCase()){
    case "M":
        console.log("Bom Dia!")
        break;
    case "V":
        console.log("Boa Tarde !")
        break;
    case "N":
        console.log("Boa Noite !")
        break;
}

//4.

const generoDoFilme = prompt("Qual genero de filme você quer assistir ?")
const valorDoIngresso= Number(prompt("Qual valor você quer pagar no seu ingresso ?"))

if( generoDoFilme === "fantasia" && valorDoIngresso <= 15.00){
    console.log("Bom filme !")
} else {
    console.log("Escolha outro filme :(" )
}

//Desafios
//1
const generoDoFilme = prompt("Qual genero de filme você quer assistir ?")
const valorDoIngresso= Number(prompt("Qual valor você quer pagar no seu ingresso ?"))
const lanches = prompt("Gostaria o que para seu lanche?")

if( generoDoFilme === "fantasia" && valorDoIngresso <= 15.00){
    console.log("Bom filme !")
    console.log (`Aproveite seu ${lanches}!`)
} else {
    console.log("Escolha outro filme :(" )
}



