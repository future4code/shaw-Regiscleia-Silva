import express, { Request, Response } from "express"
import cors from "cors"
import { produtos} from "./data"

const app = express()

app.use(cors())
app.use(express.json())




// teste
app.get('/test', (req, res)=>{
  res.send("funcionando")
})

// cria novo produto


function gerarId(){
  let resultado = ""
  let caracteres = "ABCDEFGHIJkLMNOPQRSTUVWXZYabcdefghijklmnopqrstuvwxyz0123456789";
  let quantidade = caracteres.length;
  for( let i = 0; i < 10; i++){
    resultado +=caracteres.charAt(Math.floor(Math.random()*
    quantidade
    ))
    
  }
  return resultado
}

type objetos = {
  id: string,
  name:string,
  price:number
}

app.post('/criaproduto',(req,res)=>{

  
try{
if(produtos.name === "" && produtos.price === ""){
throw new Error("preenchimento obrigatorio")
}
if(produtos.price !== Number){
  throw new Error("preenchimento obrigatorio")
}

if(produtos.price === 0){
  throw new Error("preenchimento obrigatorio")
}
if(produtos.name === Number){
  throw new Error("preenchimento obrigatorio")
}

const { name, price}:objetos = req.body
const id = gerarId()
const novaLista = {
  id,
  name,
  price
}
produtos.push(novaLista)
res.status(201).send(produtos)

}

catch(err:any){
  res.status(401)
}

})

// todos os produtos
app.get('/todos',(req, res)=>{
  
res.send(produtos)

})
// edita preço
app.put('/editarpreco/:id',(req,res)=>{

  try{
    if(produtos.price === ""){
      throw new Error("somente numeros")
    }
    if (produtos.price === 0){
      throw new Error("atribua um valor")
    }
    if (!produtos.id){
      throw new Error("atribua um valor")
    }
  

  const id = req.params.id
  const preco = req.body
  const alterar:any = produtos.map((item:any)=>{
  if(item.id === id){
    item.price = preco 
    
  }
  return {... item.price, produtos}
  })
 res.status(201).send(alterar)
}
catch(err:any){
  res.status(401)
}
})

// deletar produto
app.delete('/deletar/:id', (req,res)=>{

  const {id, name, price,}= req.body
 try{
   if (!produtos.id){
    throw new Error("id não encontrado")
   }
   if(name || price){
    throw new Error("erro inesperado")
   }
    const id = req.params.id
const index = produtos.findIndex((produto:any)=>{
   return produto.id === String(id)
})
produtos.splice(index,1)
res.send(produtos).status(201)
 }
 catch(err:any){
  res.status(401)
}
})

app.listen(3003)
console.log("funcionando")