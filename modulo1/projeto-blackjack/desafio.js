
// EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'


 const carta = comprarCarta();

//console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
// console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)

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

if (confirm("Bem-vindo ao jogo de blackjack !\n Quer iniciar uma nova rodada?")) {
let cartasUsuario = cartasIniciais()
let cartasComputador = cartasIniciais()

let pontuacaoUsuario = cartasUsuario[0].valor + cartasUsuario[1].valor
let pontuacaoComputador = cartasComputador[0].valor + cartasComputador[1].valor

let jogada = confirm(`Suas cartas são ${cartasUsuario[0].texto} ${cartasUsuario[1]} ${cartasUsuario[2].texto} A carta revelada do computador é ${cartasComputador[0].texto}\n Deseja comprar mais carta ?`)

let compra = true

// Usuario inicia jogada até atingir 21 ou parar de jogar
while(compra && pontuacaoUsuario < 22) {   
   compra = confirm(`Suas cartas são ${cartasUsuario.map(item => item.texto)}. A carta revelada do computador é ${cartasComputador[0].texto} \n Deseja comprar mais uma carta?`)
   if(compra) {
      const cartaU = comprarCarta()      
      pontuacaoUsuario += cartaU.valor;
      cartasUsuario.push(cartaU)      
   } 
}

 /*  Vez do computador jogar até atingir pontos do usuário
 while(pontuacaoComputador <= pontuacaoUsuario) {
   const cartaC = comprarCarta()      
   pontuacaoComputador += cartaC.valor;
   cartasComputador.push(cartaC)  */
}
 
let vencedor;
if(pontuacaoUsuario > 21) {
   vencedor = "O computador ganhou!"
} else if (pontuacaoComputador > 21) {
   vencedor = "O usuário ganhou!"
} else if (pontuacaoUsuario < pontuacaoComputador) {
   vencedor = "O usuário ganhou!"
} else if (pontuacaoComputador < pontuacaoUsuario) {
   vencedor = "O computador ganhou!"
} else {
   vencedor = "O jogo empatou!"

} else {
   console.log("O jogo acabou !")

alert (`Suas cartas são ${cartasUsuario.map(item => item.texto)} . Sua pontuação é ${pontuacaoUsuario}.
   As cartas do computador são ${cartasComputador[0].texto} ${cartasComputador[1].texto} . A pontuação do computador é 20. 
   ${vencedor}`)
}