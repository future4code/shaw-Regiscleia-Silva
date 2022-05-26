//exercicios 2
//a) as entradas são os numeros e saida um objeto com resultado estatistico
function obterEstatisticas(numeros : Array<number>):object {
// a função recebera um  array de numeros, e retornara um objeto
    const numerosOrdenados: Array<number> = numeros.sort(
        (a, b) => a - b 
    )

    let soma :number = 0
    // ira guardar o valor que é um numero
    for (let num of numeros) {
        soma += num
    }
    // um objeto sera criado com as informaçoes dadas e calculadas
    const estatisticas: object  = {
        maior: numerosOrdenados[numeros.length - 1],
        menor: numerosOrdenados[0],
        media: soma / numeros.length
    }

    return estatisticas
}
//c)



type amostraDeDados = {

    numeros: number[];

    obterEstatisticas: (numeros: Array<number>) => {}
}
console.log(obterEstatisticas([10,20,30]))