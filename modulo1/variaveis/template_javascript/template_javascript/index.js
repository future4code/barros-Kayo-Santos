// Exercícios de interpretação de código

//----exercício 1 ---// 

let a = 10
let b = 10

console.log(b) // será impresso o número 10

b = 5
console.log(a, b) //serão impressos os números 10 e 5

//----exercício 2 ---// 

let a = 10
let b = 20
c = a
b = c
a = b

console.log(a, b, c) // serão impressos os números 10, 10 , 10


//----exercício 3 ---// 


let horasTrabalhadas = prompt("Quantas horas você trabalha por dia?")
let salarioRecebido = prompt("Quanto você recebe por dia?")
alert(`Voce recebe ${salarioRecebido/horasTrabalhadas} por hora`)


// Exercícios de escrita de código

//----exercício 1 ---// 

let nome
let idade
console.log (typeof nome, typeof idade) // foi impresso undefined undefined . Isso aconteceu pois não foi atribuido valores as variáveis.


let nome = prompt("Qual o seu nome?")
let idade = prompt("Qual é a sua idade?")
console.log(typeof nome, typeof idade) // imprimiu string string
console.log("Olá", nome, "você tem", idade, "anos")


//----exercício 2 ---//


prompt("Você gosta de programar?")
let roupaAzul = "sim"
console.log("Você gosta de programar?", roupaAzul)

prompt("Você já jantou?")
let janta = "não"
console.log("Você já jantou?", janta)

prompt("Você gosta de estudar na Labenu?")
let labenu = "sim"
console.log("Você gosta de estudar na Labenu", labenu)


//----exercício 3 ---//

let a = 10
let b = 25

trocando os valores
let novoValorDeA = b
let novoValorDeB = a

//depois de trocados, teremos o seguinte resultado:

console.log("O novo Valor de a é", novoValorDeA)
console.log("O novo Valor de b é", novoValorDeB)



// ----- Desafios ------/


let numero1 = prompt("Me diga um número")
let numero2 = prompt("Me diga outro número")
let numero1Novo = Number (numero1)
let numero2Novo = Number (numero2)
let soma = (numero1Novo+numero2Novo)
let multiplicacao = numero1Novo*numero2Novo

console.log("O primeiro número somado ao segundo número resulta em:", soma)
console.log("O primeiro número multiplicado pelo segundo número resulta em:", multiplicacao)



