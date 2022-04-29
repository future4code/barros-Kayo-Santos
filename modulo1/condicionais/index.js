// Exercícios de interpretação de código

// exercício 1

// const respostaDoUsuario = prompt("Digite o número que você quer testar")
// const numero = Number(respostaDoUsuario)

// if (numero % 2 === 0) {
//   console.log("Passou no teste.")
// } else {
//   console.log("Não passou no teste.")
// }

// a) Explique o que o código faz. Qual o teste que ele realiza? R: ele calcula se o número é disível ou não por 2. ou se é par ou ímpar.
// b) Para que tipos de números ele imprime no console "Passou no teste"? R: números divisíveis por 2, ou pares.
//c) Para que tipos de números a mensagem é "Não passou no teste"? R: números não divisíveos por 2, ou ímpares.

//exercício 2

// O código abaixo foi feito por uma pessoa desenvolvedora, contratada para automatizar algumas tarefas de um supermercado:

// let fruta = prompt("Escolha uma fruta")
// let preco
// switch (fruta) {
//   case "Laranja":
//     preco = 3.5
//     break;
//   case "Maçã":
//     preco = 2.25
//     break;
//   case "Uva":
//     preco = 0.30
//     break;
//   case "Pêra":
//     preco = 5.5
//     break; // BREAK PARA O ITEM c.
//   default:
//     preco = 5
//     break;
// }
//console.log("O preço da fruta ", fruta, " é ", "R$ ", preco)

//a) Para que serve o código acima? R: ele pergunta ao usuário qual a fruta que ele deseja saber o valor e mostra o valor da fruta escolhida.
//b) Qual será a mensagem impressa no console, se o valor de fruta for "Maçã"? R: O preço da fruta Maçã é R$ 2.25
//c) Considere que um usuário queira comprar uma Pêra, qual seria a mensagem impressa no console se retirássemos
// o break que está logo acima do default (o break indicado pelo comentário "BREAK PARA O ITEM c.")? R: O preço da fruta Pêra é R$ 5

//exercício 3

//Leia o código abaixo:

// const numero = Number(prompt("Digite o primeiro número."))

// if(numero > 0) {
//   console.log("Esse número passou no teste")
// 	let mensagem = "Essa mensagem é secreta!!!"
// }

// console.log(mensagem)

//a) O que a primeira linha está fazendo? R: declando a varíavel numero e fazendo uma pergunta ao usuário.
//b) Considere um usuário digitou o número 10. Qual será a mensagem do terminal? E se fosse o número -10? R: ao digitar o número 10 irá aparecer Esse número passou no teste
//ao digitar -10 não irá aparecer nada no console.
//c) Haverá algum erro no console? Justifique usando os conceitos de bloco ou escopo. R: sim, pois o console não consegue acessar a varíavel mensagem pois ela não é
//global, ela está dentro do condicional if e como o console está fora não consegue ter acesso a ela.

// Exercícios de escrita de código

// exercício 1: Faça um programa que pergunta ao usuário qual a idade dele e imprima no console se ele/ela pode dirigir (apenas maiores de idade).

let idade = Number(prompt("Qual a sua idade?"))

if(idade>=18){
    console.log("Você pode dirigir.");
}else{
    console.log("Você não pode dirigir.");
}

// exercício 2: Agora faça um programa que verifica que turno do dia um aluno estuda. Peça para digitar M (matutino) ou V (Vespertino) ou N (Noturno). 
//Imprima no console a mensagem "Bom Dia!", "Boa Tarde!" ou "Boa Noite!". Utilize o bloco if/else

let turno = prompt(`Digite a letra correspondente ao seu turno de estudo: 
M - matutino
V - vespertino
N - noturno`)

    if(turno === "M"){
        console.log("Bom dia!");
    }else if(turno === "V"){
        console.log("Boa tarde!");
    }else if (turno === "N"){
        console.log("Boa Noite!");
    }

// exercício 3: Repita o exercício anterior, mas utilizando a estrutura de switch case agora.

let turno = prompt(`Digite a letra correspondente ao seu turno de estudo: 
M - matutino
V - vespertino
N - noturno`)


    switch(turno){
        case "M":
            console.log("Bom dia!");
        break;
        case "V":
            console.log("Boa tarde!");
        break;
        case "N":
            console.log("Boa noite!");

    }
        

exercício 4: 


let genero = prompt("Qual o Gênero do filme?")
let preco = Number(prompt("Qual o valor do ingresso?"))

if(genero === "Fantasia" && preco <15){
    console.log("Bom filme!");
}else {
    console.log("Escolha outro filme :(");
}


// Desafios

// Desafio 1

let genero = prompt("Qual o Gênero do filme?")
let preco = Number(prompt("Qual o valor do ingresso?"))

if(genero === "Fantasia" && preco <15){
    let lanchinho = prompt("Qual lanchinho você vai comprar?")
    console.log(`Bom filme! e aproveite o seu ${lanchinho}.`);
}else {
    console.log("Escolha outro filme :(");
}


//Desafio 2


//variáveis - perguntas
let nome = prompt("Qual o seu nome completo?")
let tipoJogo = prompt(`Qual o tipo de jogo?:
IN - para internacional
DO - para doméstico`)
let etapaJogo = prompt(`Escolha qual a etapa do jogo:
SF - para semi-final
DT - para a decisão do terceiro lugar
FI - para a final`)
let categoria = Number(prompt(`Qual a categoria?: 1,2,3 ou 4`))
let ingresso = Number(prompt("Qual a quantidade de ingressos?"))
let valorIngresso
let valorTotal
let valorIngressoIn
let valor
//sistema de vendas




if(tipoJogo === "DO" && etapaJogo === "SF" && categoria === 1){
    valorIngresso = 1320
    valorTotal = valorIngresso * ingresso
    valorTotal1 = "R$" + valorTotal
    valor = "R$" + valorIngresso
    tipoJogo = "Nacional"
    etapaJogo = "Semifinais"
}else if (tipoJogo === "DO" && etapaJogo === "SF" && categoria === 2){
    valorIngresso = 880
    valorTotal = valorIngresso * ingresso
    valorTotal1 = "R$" + valorTotal
    valor = "R$" + valorIngresso
    tipoJogo = "Nacional"
    etapaJogo = "Semifinais"
}else if(tipoJogo === "DO" && etapaJogo === "SF" && categoria === 3){
    valorIngresso = 550
    valorTotal = valorIngresso * ingresso
    valorTotal1 = "R$" + valorTotal
    valor = "R$" + valorIngresso
    tipoJogo = "Nacional"
    etapaJogo = "Semifinais"
}else if(tipoJogo === "DO" && etapaJogo === "SF" && categoria === 4){
    valorIngresso = 220
    valorTotal = valorIngresso * ingresso
    valorTotal1 = "R$" + valorTotal
    valor = "R$" + valorIngresso
    tipoJogo = "Nacional"
    etapaJogo = "Semifinais"
}else if(tipoJogo === "DO" && etapaJogo === "DT" && categoria === 1){
    valorIngresso = 660
    valorTotal = valorIngresso * ingresso
    valorTotal1 = "R$" + valorTotal
    valor = "R$" + valorIngresso
    tipoJogo = "Nacional"
    etapaJogo = "Final"
}else if(tipoJogo === "DO" && etapaJogo === "DT" && categoria === 2){
    valorIngresso = 440
    valorTotal = valorIngresso * ingresso
    valorTotal1 = "R$" + valorTotal
    valor = "R$" + valorIngresso
    tipoJogo = "Nacional"
    etapaJogo = "Decisão do 3º lugar"
}else if(tipoJogo === "DO" && etapaJogo === "DT" && categoria === 3){
    valorIngresso = 330
    valorTotal = valorIngresso * ingresso
    valorTotal1 = "R$" + valorTotal
    valor = "R$" + valorIngresso
    tipoJogo = "Nacional"
    etapaJogo = "Decisão do 3º lugar"
}else if(tipoJogo === "DO" && etapaJogo === "DT" && categoria === 4){
    valorIngresso = 170
    valorTotal = valorIngresso * ingresso
    valorTotal1 = "R$" + valorTotal
    valor = "R$" + valorIngresso
    tipoJogo = "Nacional"
    etapaJogo = "Decisão do 3º lugar"
}else if(tipoJogo === "DO" && etapaJogo === "FI" && categoria === 1){
    valorIngresso = 1980
    valorTotal = valorIngresso * ingresso
    valorTotal1 = "R$" + valorTotal
    valor = "R$" + valorIngresso
    tipoJogo = "Nacional"
    etapaJogo = "Final"
}else if(tipoJogo === "DO" && etapaJogo === "FI" && categoria === 2){
    valorIngresso = 1320
    valorTotal = valorIngresso * ingresso
    valorTotal1 = "R$" + valorTotal
    valor = "R$" + valorIngresso
    tipoJogo = "Nacional"
    etapaJogo = "Final"
}else if(tipoJogo === "DO" && etapaJogo === "FI" && categoria === 3){
    valorIngresso = 880
    valorTotal = valorIngresso * ingresso
    valorTotal1 = "R$" + valorTotal
    valor = "R$" + valorIngresso
    tipoJogo = "Nacional"
    etapaJogo = "Final"
}else if(tipoJogo === "DO" && etapaJogo === "FI" && categoria === 4){
    valorIngresso = 330
    valorTotal = valorIngresso * ingresso
    valorTotal1 = "R$" + valorTotal
    valor = "R$" + valorIngresso
    tipoJogo = "Nacional"
    etapaJogo = "Final"
}else if(tipoJogo === "IN" && etapaJogo === "SF" && categoria === 1){
    valorIngresso = (1320 / 4.10).toFixed(2)
    valorTotal = (valorIngresso * ingresso)
    valorTotal1 = "U$" + valorTotal
    valor = "U$" + valorIngresso
    tipoJogo = "Internacional"
    etapaJogo = "Semifinais"
}else if(tipoJogo === "IN" && etapaJogo === "SF" && categoria === 2){
    valorIngresso = (880 / 4.10).toFixed(2)
    valorTotal = (valorIngresso * ingresso)
    valorTotal1 = "U$" + valorTotal
    valor = "U$" + valorIngresso
    tipoJogo = "Internacional"
    etapaJogo = "Semifinais"
}else if(tipoJogo === "IN" && etapaJogo === "SF" && categoria === 3){
    valorIngresso = (550 / 4.10).toFixed(2)
    valorTotal = (valorIngresso * ingresso)
    valorTotal1 = "U$" + valorTotal
    valor = "U$" + valorIngresso
    tipoJogo = "Internacional"
    etapaJogo = "Semifinais"
}else if(tipoJogo === "IN" && etapaJogo === "SF" && categoria === 4){
    valorIngresso = (220 / 4.10).toFixed(2)
    valorTotal = (valorIngresso * ingresso)
    valorTotal1 = "U$" + valorTotal
    valor = "U$" + valorIngresso
    tipoJogo = "Internacional"
    etapaJogo = "Semifinais"
}else if(tipoJogo === "IN" && etapaJogo === "DT" && categoria === 1){
    valorIngresso = (660 / 4.10).toFixed(2)
    valorTotal = (valorIngresso * ingresso)
    valorTotal1 = "U$" + valorTotal
    valor = "U$" + valorIngresso
    tipoJogo = "Internacional"
    etapaJogo = "Decisão do 3º lugar"
}else if(tipoJogo === "IN" && etapaJogo === "DT" && categoria === 2){
    valorIngresso = (440 / 4.10).toFixed(2)
    valorTotal = (valorIngresso * ingresso)
    valorTotal1 = "U$" + valorTotal
    valor = "U$" + valorIngresso
    tipoJogo = "Internacional"
    etapaJogo = "Decisão do 3º lugar"
}else if(tipoJogo === "IN" && etapaJogo === "DT" && categoria === 3){
    valorIngresso = (330 / 4.10).toFixed(2)
    valorTotal = (valorIngresso * ingresso)
    valorTotal1 = "U$" + valorTotal
    valor = "U$" + valorIngresso
    tipoJogo = "Internacional"
    etapaJogo = "Decisão do 3º lugar"
}else if(tipoJogo === "IN" && etapaJogo === "DT" && categoria === 4){
    valorIngresso = (170 / 4.10).toFixed(2)
    valorTotal = (valorIngresso * ingresso)
    valorTotal1 = "U$" + valorTotal
    valor = "U$" + valorIngresso
    tipoJogo = "Internacional"
    etapaJogo = "Decisão do 3º lugar"
}else if(tipoJogo === "IN" && etapaJogo === "FI" && categoria === 1){
    valorIngresso = (1980 / 4.10).toFixed(2)
    valorTotal = (valorIngresso * ingresso)
    valorTotal1 = "U$" + valorTotal
    valor = "U$" + valorIngresso
    tipoJogo = "Internacional"
    etapaJogo = "Final"
}else if(tipoJogo === "IN" && etapaJogo === "FI" && categoria === 2){
    valorIngresso = (1320 / 4.10).toFixed(2)
    valorTotal = (valorIngresso * ingresso)
    valorTotal1 = "U$" + valorTotal
    valor = "U$" + valorIngresso
    tipoJogo = "Internacional"
    etapaJogo = "Final"
}else if(tipoJogo === "IN" && etapaJogo === "FI" && categoria === 3){
    valorIngresso = (880 / 4.10).toFixed(2)
    valorTotal = (valorIngresso * ingresso)
    valorTotal1 = "U$" + valorTotal
    valor = "U$" + valorIngresso
    tipoJogo = "Internacional"
    etapaJogo = "Final"
}else if(tipoJogo === "IN" && etapaJogo === "FI" && categoria === 4){
    valorIngresso = (330 / 4.10).toFixed(2)
    valorTotal = (valorIngresso * ingresso)
    valorTotal1 = "U$" + valorTotal
    valor = "U$" + valorIngresso
    tipoJogo = "Internacional"
    etapaJogo = "Final"
}



console.log(`---Dados da compra---
Nome do cliente: ${nome}
Tipo do jogo: ${tipoJogo}
Etapa do jogo: ${etapaJogo}
Categoria: ${categoria}
Quantidade de Ingressos: ${ingresso}
---Valores---
Valor do ingresso: ${valor}
Valor total:${valorTotal1}`);



