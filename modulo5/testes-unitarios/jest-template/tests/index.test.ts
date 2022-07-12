import { PerformaAttack } from "./performaAttack"
import {personagem, validateCharacter} from "./validateCharacter"



test ("verifica nome",()=>{
 const resultado = validateCharacter ({
    nome: "",
    vida:10,
    defesa:50,
    forca:100
 })
 expect(resultado).toBe(false)
})

test("verifica vida",()=>{
    const resultado = validateCharacter({
        nome:"charlie",
        vida: 0,
        defesa:10,
        forca: 30
    })
    expect(resultado).toBe(false)
})

test("verifica a força",()=>{
    const resultado = validateCharacter({
        nome:"charlie",
        vida: 45,
        defesa:10,
        forca: 0
    })
    expect(resultado).toBe(false)
})

test("verifica a defesa",()=>{
    const resultado = validateCharacter({
        nome:"charlie",
        vida: 20,
        defesa:0,
        forca: 30
    })
    expect(resultado).toBe(false)
})

test("verifica a vida, defesa e forca",()=>{
    const resultado = validateCharacter({
        nome:"charlie",
        vida: -1,
        defesa:10,
        forca: 30
    })
    expect(resultado).toBe(false)
})

test("verifica todas informações",()=>{
    const resultado = validateCharacter({
        nome:"charlie",
        vida: 50,
        defesa:10,
        forca: 30
    })
    expect(resultado).toBe(true)
})

test("verifica todas informações completas",()=>{
    const mock = jest.fn(()=>{
       const personagem = {
        nome:"charlie",
        vida: 50,
        defesa:10,
        forca: 30
       }
       return true
    })
   
    
})

test("reporta erro",()=>{
    try{
    const mock = jest.fn(()=>{
       const personagem = {
        nome:"",
        vida: 50,
        defesa:10,
        forca: 30
       }
       return false
    })
}catch(error){
throw new Error("prenchimento obrigatorio");

}
   
})

/// testes performaAttack
test("mock com defensor perde vida",()=>{
    const mock = jest.fn(()=>{
        return true
    })
    const atacante :personagem ={
        nome:"charlie",
        vida:1500,
        defesa:10,
        forca: 30
       
    }
    const defensor:personagem ={
        nome:"panterinha",
        vida: 1500,
        defesa:1000,
        forca: 800
    }
   
    PerformaAttack(atacante, defensor, mock as any)
   
        expect(defensor.vida).toEqual(1300)
        expect(mock).toHaveBeenCalled();
        expect(mock).toHaveBeenCalledTimes(2)
        expect(mock).toHaveReturnedTimes(2)
    
})


 test("mock que reporta erro",()=>{
    expect.assertions(4)
    const mock = jest.fn(()=>{
        return false
    })
    const atacante :personagem ={
        nome:"",
        vida: 50,
        defesa:200,
        forca: 30
       
    }
    const defensor:personagem ={
        nome:"panterinha",
        vida: 5110,
        defesa:100,
        forca: 800
    }

try{
    PerformaAttack(atacante, defensor, mock as any)
    }catch(erro){
        expect(erro.message).toBe("personagem invalido")
        expect(mock).toHaveBeenCalled();
        expect(mock).toHaveBeenCalledTimes(1)
        expect(mock).toHaveReturnedTimes(1)
    }
}) 