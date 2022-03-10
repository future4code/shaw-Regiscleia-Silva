
 //EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
/** 

    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    //console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    //console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 


    console.log( "Boas vindas ao jogo de Blackjack!")

    if(confirm("Quer iniciar uma nova rodada ?")) {
      const cartaUsuario = comprarCarta()
      const cartaUsuarioDois = comprarCarta()
      const computador = comprarCarta()
      const computadorDois = comprarCarta()
      let pontuacaoUsuario = cartaUsuario.valor + cartaUsuarioDois.valor
      let pontuacaoComputador = computador.valor + computadorDois.valor

    console.log(`Usuario - cartas: ${cartaUsuario.texto} ${cartaUsuarioDois.texto} - pontuação ${pontuacaoUsuario}`)
    console.log(`computador - cartas: ${computador.texto} ${computadorDois.texto} - pontuação ${pontuacaoComputador}`)
   if(pontuacaoUsuario === pontuacaoComputador){
   console.log("empate !")
   
   } else if (pontuacaoUsuario > pontuacaoComputador){
    console.log("O usuario ganhou !")
   }
   else{
   console.log("O computador ganhou !")
   }
   } else {
      console.log("O jogo acabou !")
   }

 


**/
