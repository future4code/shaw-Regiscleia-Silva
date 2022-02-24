// EXERCICIO DE INTERPRETAÇÂO
/** 
const usuarios = [
    { nome: "Amanda Rangel", apelido: "Mandi" },
    { nome: "Laís Petra", apelido: "Laura" },
    { nome: "Letícia Chijo", apelido: "Chijo" }
  ]
  
  const novoArrayA = usuarios.map((item, index, array) => {
     console.log(item, index, array)
  }) 
  //a. sera impresso três objetos de acordo com o loop do primeiro objeto seus dados
  consecutivamente o array com os outros objetos e cada objeto com seu indice de 0,1, 2.
*/

  //2.
  /** 
  const usuarios = [
  { nome: "Amanda Rangel", apelido: "Mandi" },
  { nome: "Laís Petra", apelido: "Laura" },
  { nome: "Letícia Chijo", apelido: "Chijo" },
]

const novoArrayB = usuarios.map((item, index, array) => {
   return item.nome
})

console.log(novoArrayB)
//a. ira imprimir novo array com tres elementos com os nomes "Amanda Rangel",
"Laís Petra", "Letícia Chijo"
*/

//3a.
/** 
const usuarios = [
  { nome: "Amanda Rangel", apelido: "Mandi" },
  { nome: "Laís Petra", apelido: "Laura" },
  { nome: "Letícia Chijo", apelido: "Chijo" },
]

const novoArrayC = usuarios.filter((item, index, array) => {
   return item.apelido !== "Chijo"
})

console.log(novoArrayC)
// ira imprimir em um novo array os elementos que o apelido não seja "chijo"
 */

// EXERCICIO DE ESCRITA
//1.
const pets = [
    { nome: "Lupin", raca: "Salsicha"},
    { nome: "Polly", raca: "Lhasa Apso"},
    { nome: "Madame", raca: "Poodle"},
    { nome: "Quentinho", raca: "Salsicha"},
    { nome: "Fluffy", raca: "Poodle"},
    { nome: "Caramelo", raca: "Vira-lata"},
 ]
 
 //a.
 const nomeDosDogs = pets.map((array, item, index) =>{
    return array.nome
 })
console.log(nomeDosDogs)

 //b.
const cachorroSalsicha =  pets.filter((item, index, array) =>{
    return item.raca === "Salsicha"
})  
console.log(cachorroSalsicha)

//c.
const poodles = pets.filter((item, index, array)=> {
    return item.raca === "Poodle"
})
.map((item, index, array) =>{
    return `Você ganhou um cupom de desconto de 10% para tosar o/a ${item.nome}`
 })  
console.log(poodles)

   //2.
   const produtos = [
    { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
    { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
    { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
    { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
    { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
    { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
    { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
    { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
    { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
    { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
 ]
   //a. 
const itensDoMercado = produtos.map((item,index, array)=>{
    return item.nome
})  
console.log(itensDoMercado)
 

   //b.
 const aplicandoDesconto =  produtos.map((item)=> {
const desconto = 0.05 * item.preco;
const obj = {
    nome: item.nome,
    preco: item.preco - desconto
}
    return obj 
 })
console.log(aplicandoDesconto)

//c.
 const selecaoBebidas = produtos.filter((item) => {
    return item.categoria === "Bebidas"
})
console.log(selecaoBebidas) 

//d.
const selecaoYpe = produtos.filter((item)=>{
    return item.nome.includes( "Ypê") 
}) 
console.log(selecaoYpe) 

// e.
const selecaoYpe = produtos.filter((item)=>{
    return item.nome.includes( "Ypê") 
})
 .map((item)=>{
    return `Compre ${item.nome} por R$${item.preco}`
           
 })
 console.log(selecaoYpe)