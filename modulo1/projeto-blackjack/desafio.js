
// EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'


const carta = comprarCarta();

//console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
// console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)




//console.log(cartasUsuario);
//console.log(cartasComputador);

if (confirm("Bem-vindo ao jogo de blackjack !\n Quer iniciar uma nova rodada?")) {
let cartasUsuario = cartasIniciais()
let cartasComputador = cartasIniciais()

//let jogada = confirm(`Suas cartas são ${cartasUsuario[0].texto} ${cartasUsuario[1]} ${cartasUsuario[2].texto} A carta revelada do computador é ${cartasComputador[0].texto}\n Deseja comprar mais carta ?`)

while(cartasUsuario === 21){
   confirm (`Suas cartas são ${cartasUsuario.texto} ${cartasUsuario.texto}. A carta revelada do computador é ${cartasComputador[0].texto} \n Deseja comprar mais uma carta?`)
     cartasUsuario ++
}

} else {
   console.log("O jogo acabou !")
}

function cartasIniciais() {
   const cartas = []
   while(cartas.length < 2) {
      const carta = comprarCarta()
      if (carta.texto !== 'A') {
         cartas.push(carta)
      }
   }
   return cartas
}

