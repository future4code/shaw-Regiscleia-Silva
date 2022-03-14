
// COMPARADORES
// Exercício 1------------------------------------------------------------------------------------

// a-)Comparador de desigualdade a!==b 
// Exemplo:

function checarDesigualdade(a, b) {

    return `No comparador de desigualdade ${a}!==${b} é ${a !== b}`
}
console.log(checarDesigualdade(1, 3));

// b-)Compare a igualdade entre a===b
//  Sua lógica aqui
function checarIgualdade(a, b) {

    return `No comparador de igualdade ${a}===${b} é ${a === b}`
}
console.log(checarDesigualdade(5, 8));




// c-)Faça uma função chamada "verificaSeEMaior"
function verificaSeEMaior(a,b){
    return `o valor ${a} > ${b} é ${a > b }`
}
console.log(verificaSeEMaior(321, 2156));


// Exercício 2------------------------------------------------------------------------------------
//Escreva true or false para as comparações abaixo:
// exemplo 1>2 = false
// a-) 1==='1'= false
// b-) 1=='1'= true
// c-) 'a'==='b'= false
// d-) 'b'>'a'= false
// e-) 0!==null= 


// CONDICIONAIS

// Exercício 3------------------------------------------------------------------------------------

const cadastro = (nomeDoUsuario, anoDeNascimento, senhaDoUsuario, nacionalidade) => {
    const usuario = []

    if(2022 - anoDeNascimento >= 18 && senhaDoUsuario.length >= 6 && nacionalidade === "brasileira") {
        let DadosUsuario= {
            nome: nomeDoUsuario,
            anoQueNasceu: anoDeNascimento,
            senha: senhaDoUsuario,
            ondeNasceu: nacionalidade
        }
        usuario.push(DadosUsuario)
     return usuario
    } else {
        return []
    }
}
    //  Sua lógica aqui

console.log(cadastro("Regiscleia", 1995, "123456", "brasileira"));

// Exercício 4-----------------------------------------------------------------------------------------------

const password = prompt("digite sua senha ?")

const login = (usuarioSenha) => {
    const login = "labenu"
    
    if(usuarioSenha == login){
        console.log("Usuario logado")
    }else{
        console.log("Senha invalida")
    }
    //  Sua lógica aqui
}
console.log(login(password))
// Exercício 5----------------------------------------------------------------------------------------------------

let nomePaciente = prompt("digite seu nome")
let vacina = prompt("qual vacina que você tomou ?")



const primeiraDose = () => {

let tempo;
let data = "14/03/2022"

if (vacina == "Coronavac"){
    tempo = 28

}else if(vacina == "Astrazenica" || vacina =="Pfizer"){
 tempo = 90

}  


let mensagem = `Ola ${nomePaciente}! A proxima dose de ${vacina} é daqui ${tempo}
dias. Compareça no posto na dara ${data}`
return mensagem
    //  Sua lógica aqui


}
console.log(primeiraDose())


// LOOP+CONDICIONAL

/*// Exercício 6 -------------------------------------------------------------------------------------

const segundaDose = (nomeDoUsuario) => {
    const usuarios = [
        { nome: "Artur", imunizacao: "incompleta" },
        { nome: "Barbara", imunizacao: "incompleta" },
        { nome: "Carlos", imunizacao: "incompleta" }
    ]

    //  Sua lógica aqui


}
console.log(segundaDose("Barbara"));

// Exercício 7 --------------------------------------------------------------------------------------

const avisoAosAtrasados = () => {
    const usuarios = [
        { nome: "Artur", imunizacao: "incompleta" },
        { nome: "Barbara", imunizacao: "completa" },
        { nome: "Carlos", imunizacao: "incompleta" }
    ]

    //  Sua lógica aqui

}
console.log(avisoAosAtrasados());


// DESAFIO------------------------------------------------------------------------------------------

const usuarios = [
    {
        nome: "Artur",
        ano: 2000,
        nacionalidae: "brasileiro",
        senha: "123456",
        vacina: "pfizer",
        imunizacao: "incompleta"
    },
    {
        nome: "Bárbara",
        ano: 1984,
        nacionalidae: "brasileira",
        senha: "labenu",
        vacina: "astrazenica",
        imunizacao: "completa"
    },
    {
        nome: "Carlos",
        ano: 2000,
        nacionalidae: "brasileiro",
        senha: "123456",
        vacina: "coronavac",
        imunizacao: "incompleta"
    }

]

const cadastroDesafio = () => {
    //  Sua lógica aqui
}
console.log(cadastroDesafio());

const loginDesafio = () => {
    //  Sua lógica aqui
}
console.log(loginDesafio());

const primeiraDoseDesafio = () => {
//  Sua lógica aqui
}
console.log(primeiraDoseDesafio())
const segundaDoseDesafio = (nomeDoUsuario) => {
    //  Sua lógica aqui
}
console.log(segundaDoseDesafio("ALGUM NOME AQUI"));

const avisoAosAtrasadosDesafio = () => {
    //  Sua lógica aqui
}
//console.log(avisoAosAtrasadosDesafio())*/