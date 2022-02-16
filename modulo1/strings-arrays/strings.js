/** execicio de interpretação
 * 1.
let array
console.log('a. ', array) // ira aparecer a. undefined

array = null
console.log('b. ', array) // ira imprimir b. null

array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
console.log('c. ', array.length) // ira imprimir c. 11

let i = 0
console.log('d. ', array[i]) // imprimira d. 3

array[i+1] = 19
console.log('e. ', array) // e. 19

const valor = array[i+6]
console.log('f. ', valor) // f. 9
**/

/** 2. 
const frase = prompt("Digite uma frase")

console.log(frase.toUpperCase().replaceAll("A", "I"), frase.length)
// SUBI NUM ÔNIBUS EM MIRROCOS,  27
*/


// exercicios de escrita
 //1.
let nomeDoUsuario= prompt ("Digite Seu nome")
let emailDoUsuario = prompt("Digite seu email")
console.log(`O seu e-mail ${emailDoUsuario} foi cadastrado com sucesso.Seja bem-vinda(o),${nomeDoUsuario}`);



// 2
let comidasPreferidas = ["carne", "milho", "açai", "salada", "sorvete"]

console.log ("Essas são as minhas comidas preferidas")

console.log (comidasPreferidas[0])
console.log(comidasPreferidas[1])
console.log(comidasPreferidas[2])
console.log(comidasPreferidas[3])
console.log(comidasPreferidas[4])

let comidaDoUsuario=prompt("Digite sua comida preferida")
comidasPreferidas[1] = comidaDoUsuario
console.log(comidasPreferidas)



//3 
let listaDetarefas = []
let primeiraTarefa= prompt("Digite a primeira tarefa do seu dia")
let segundatarefa = prompt("Digite a segunda tarefa do seu dia")
let terceiraTarefa = prompt("digite a terceira tarefa do dia")
 
 listaDetarefas.push(primeiraTarefa)
 listaDetarefas.push(segundatarefa) 
 listaDetarefas.push(terceiraTarefa)
 console.log(listaDetarefas)

 let realizouTarefa = prompt("Digite qual tarefa ja realizou de 0, 1 ou 2")
 listaDetarefas.splice(realizouTarefa,1)
 console.log(listaDetarefas)

