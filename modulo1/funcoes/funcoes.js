// exercicio de interpretação
/**1.
function minhaFuncao(variavel) {
	return variavel * 5
}

console.log(minhaFuncao(2)) //  = 10
console.log(minhaFuncao(10)) // = 50
//b. tirando o console ira chamar a função e realizar o calculo, porem não ira imprimir no console.
*/

/**2 
let textoDoUsuario = prompt("Insira um texto");
const outraFuncao = function(texto) {
	return texto.toLowerCase().includes("cenoura")
}
const resposta = outraFuncao(textoDoUsuario)
console.log(resposta)


/**a. a função tem os parametros para deixar em minusculo o texto inserido pelo usuario e verificar se tem 
 a palavra cenoura no texto digitado pelo usuario.A sua utilidade é de incluir uma função em algo especifico 
 sem alterar outros blocos de codigos

 //b. i- true
 //  i - true
 //  i - true 
*/

//exercicio de escrita
 //1
 function mensagem() {
    let sobreMim = "Eu sou Regiscleia, tenho 26 anos, moro em São Paulo e sou estudante."
    console.log(sobreMim);
 }
    //b. 
     function informacoes(nome, idade, cidade, profissao) {   
        let dados = `Eu sou ${nome}, tenho ${idade} anos, moro em ${cidade} e sou ${profissao}.`
        return dados
    }
    let resposta = informacoes("Regiscleia", 26, "Embu", "estudante")
    console.log(resposta)
    
    //2 a.
    
    function somar(n1,n2){
        return n1 + n2  
    }
    let resultdo = somar(5,6)
    console.log(resultdo)

//b.

function maiorOuIgual(n1,n2){
return n1 >= n2
}
let resultado = maiorOuIgual(2,1)
console.log(resultado)

//c. 
function verificaSeParOuImpar(n1){
    return n1 % 2 === 0
}
let resultado = verificaSeParOuImpar(4)
 console.log(resultado)




//3.

function somar(n1,n2){
    return n1 + n2

}

function subtrair(n1,n2){
return n1 - n2
}

function multiplicar(n1,n2){
 return n1 * n2
}

function dividir(n1,n2){
return n1/n2
}

let calculo = prompt("Digite um numero")
let calculo2 = prompt("Digite outro numero")

let soma = somar(Number(calculo), Number(calculo2))
let subtracao = subtrair(Number(calculo),Number(calculo2))
let multiplicacao = multiplicar(Number(calculo),Number(calculo2))
let divisao = dividir(Number(calculo), Number(calculo2))

console.log(`Numero inseridos: ${calculo} e ${calculo}`)
console.log(`Soma: ${soma}`);
console.log(`subtração: ${subtracao}`);
console.log(`multiplicação: ${multiplicacao}`);
console.log(`Divisão: ${divisao}`);