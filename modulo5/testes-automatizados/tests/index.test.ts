
interface Usuario {
    nome:string,
    saldo:number
}
 
 function  comprar(user: Usuario, value: number):Usuario | undefined{
 if (user.saldo >= value){
return {
    ...user,
    saldo:user.saldo - value
}

 }
 return undefined
}

 test("saldo menor",()=>{
    const usuario: Usuario ={
        nome: "charlie",
        saldo:60

    }
    const result = comprar(usuario, 70)
    expect(result).not.toBeDefined()
})
 test("saldo maior que a compra",()=>{
    const user : Usuario ={
        nome:"Regiscleia",
        saldo:400
     }
     const resultado =  comprar(user,100)
     expect(resultado).toEqual({
        name:"Regiscleia",
        saldo:20
     })
})

test("saldo igual a compra",() => {
    const usuario: Usuario = {
        nome: "Marcelo",
        saldo:500
    }
    const result  = comprar(usuario , 500)
    expect(result).toEqual({
        ...usuario,
        value:0
    })
})
