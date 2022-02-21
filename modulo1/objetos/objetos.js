/** 1.EXERCICIO DE INTERPRETAÇÃO
 * const filme = {
	nome: "Auto da Compadecida", 
	ano: 2000, 
	elenco: [
		"Matheus Nachtergaele", "Selton Mello", "Denise Fraga", 
		"Virginia Cavendish"
		], 
	transmissoesHoje: [
		{canal: "Telecine", horario: "21h"}, 
		{canal: "Canal Brasil", horario: "19h"}, 
		{canal: "Globo", horario: "14h"}
		]
}

console.log(filme.elenco[0]) // "Matheus Nachtergaele"
console.log(filme.elenco[filme.elenco.length - 1]) // "virginia Cavendish"
console.log(filme.transmissoesHoje[2]) // canal: "globo", horario : "14h"
*/

//2.
/** 
const cachorro = {
	nome: "Juca", 
	idade: 3, 
	raca: "SRD"
}

const gato = {...cachorro, nome: "Juba"}

const tartaruga = {...gato, nome: gato.nome.replaceAll("a", "o")}

console.log(cachorro)// "juca",3,"SDR"
console.log(gato) //  "juba", 3,"SDR"
console.log(tartaruga)//  "jubo", 3,"SDR"
// a sintaxe {... significa que é para realizar uma copia do objeto descrito.
*/
//3
/** 
function minhaFuncao(objeto, propriedade) {
	return objeto[propriedade]
}

const pessoa = {
  nome: "Caio", 
  idade: 23, 
  backender: false
}

console.log(minhaFuncao(pessoa, "backender"))// false // a função esta determinando que entre no objeto e na propriedade e imprima o que esta abribuido.
console.log(minhaFuncao(pessoa, "altura"))// undefined // e no segundo console não tem nenhuma propriedade com esse nome no objeto.
*/



// EXERCICIOS DE ESCRITA
//1. 
 
function nomear(pessoa) {
    console.log(`Eu sou ${pessoa.nome}, mas pode me chamar de: ${pessoa.apelidos[0]}, ${pessoa.apelidos[1]} ou ${pessoa.apelidos[2]}`)
}
const pessoa = {
    nome:"Regiscleia",
    apelidos:["Re", "Regis", "cleia"]
}
nomear(pessoa);

const novosApelidos = ["Reré", "Cleinha", "Keia"]
const pessoaDois = {
    ...pessoa,
    apelidos: [...novosApelidos]
}
nomear(pessoaDois)

//2.

const pessoaUm = {
    nome: "Regiscleia",
    idade: 26,
    profissao: "estudante"   
}
 
const pessoaDois = {
    nome:"Marcelo",
    idade: 29,
    profissao: "Analista"
}

 function deixarEmArray(pessoaUm){
const resultado = [pessoaUm.nome, pessoaUm.nome.length, pessoaUm.idade, pessoaUm.profissao, pessoaUm.profissao.length]
    return resultado
 }

console.log(deixarEmArray(pessoaUm))
console.log(deixarEmArray(pessoaDois))

// 3. 
let carrinho = []

const frutaAmarela = {
    nome :"banana",
    disponibildade : true
}
const frutaVermelha = {
    nome :"morango",
    disponibildade : true
}
const frutaVerde = {
    nome :"melancia",
    disponibildade : true
}
function Comprar(frutaAmarela,frutaVermelha, frutaVerde){

 carrinho.push(frutaAmarela) 
 carrinho.push(frutaVermelha)
 carrinho.push(frutaVerde)
}
Comprar(frutaAmarela, frutaVermelha, frutaVerde)
console.log(carrinho)











