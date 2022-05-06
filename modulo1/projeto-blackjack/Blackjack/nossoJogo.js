console.log("Bem-vindo(a) ao jogo de blackjack!");

// -- declaração de variáveis --
const carta1 = comprarCarta(); // primeira carta do usuário.
const carta2 = comprarCarta(); // segunda carta do usuário.
const carta3 = comprarCarta(); // primeira carta do computador.
const carta4 = comprarCarta(); // segunda carta do computador.
let usuario = carta1.valor + carta2.valor // lógica da soma dos valores das cartas do usuário.
let computador = carta3.valor + carta4.valor // lógica da soma dos valores das cartas do computador.

// -- lógica do jogo Blackjack

if(confirm("Quer iniciar uma nova rodada?")) {
   console.log(`Usuário - cartas: ${carta1.texto} ${carta2.texto }  - pontuação ${carta1.valor + carta2.valor}`);
   console.log(`Computador - cartas: ${carta3.texto} ${carta4.texto }  - pontuação ${carta3.valor + carta4.valor}`);
   if(usuario === computador){
      console.log("Empate");
   }else if(usuario > computador){
      console.log("O usuário ganhou!");
   }else {
      console.log("O computador ganhou!");
   }
} else {
	console.log("O jogo acabou");
}



