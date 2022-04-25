// Exercícios de interpretação de código

//exercício 1

function minhaFuncao(variavel) {
	return variavel * 5
}

console.log(minhaFuncao(2))//10
console.log(minhaFuncao(10))//50

a) 10 e 50
b) não iria aparecer nada, porém a função ia está ativa mas sem imprimir no console.


//exercício 2


let textoDoUsuario = prompt("Insira um texto");

const outraFuncao = function(texto) {
	return texto.toLowerCase().includes("cenoura")
}

const resposta = outraFuncao(textoDoUsuario)
console.log(resposta)

a) um função que pede um texto ao usuário e retorna o texto em minisculo comparando se no texto tem a palavra cenoura.
b) true, true e true.


// Exercícios de escrita de código

// exercício 1:


function biografia(){
    console.log(`Eu sou kayo, tenho 32 anos, moro em Maceió e sou estagiário`)
}

biografia() //a)


let nome = "Kayo"
let idade = 32
let endereço = "Maceió"
let profissao = "estudante"

function minhasInformacoes(){
       return string = `Eu sou ${nome}, tenho ${idade} anos, moro em ${endereço} e sou ${profissao}` 
       
}

console.log(minhasInformacoes()) // b)


//exercício 2

//2. Escreva as funções explicadas abaixo:
    
// a) Escreva uma função que receba 2 números como parâmetros, e, dentro da função, faça a soma das duas entradas e retorne o resultado.
// Invoque a função e imprima no console o resultado.

function soma(numero1, numero2){
    return numero1 + numero2
}

console.log(soma(5,7))


// // b) Faça uma função que recebe 2 números e retorne um booleano que informa se o primeiro número é **maior ou igual** ao segundo.

function comparacao(numeroo1,numeroo2){
    return numeroo1 >= numeroo2
    
}
console.log(comparacao(15,8))


// // c) Escreva uma função que receba um número e devolva um booleano indicando se ele é par ou não



function par(numerooo){
    return (numerooo) % 2 == 0;
    }

console.log(par(24))


// // d) Faça uma função que recebe uma mensagem (`string`) como parâmetro e imprima o tamanho dessa mensagem, juntamente 
// //com uma versão dela em letras maiúsculas.


const string = `Me chamo kayo Céshar`
string.toUpperCase()

function tamanho(string){
    return string.length
    
   }
console.log(tamanho(string))
console.log(string.toUpperCase())


//exercicio 3
// Crie uma função para cada uma das operações básicas (soma, subtração, multiplicação e divisão). Em seguida, 
// peça para o usuário inserir dois números e chame essas 4 funções
//  com esses valores inputados pelo usuário sendo o argumento. Por fim, mostre no console o resultado das operações:


function soma(numero1,numero2){
    return numero1 + numero2
}

function diferenca (numero1,numero2){
    return numero1 - numero2
}

function multiplicacao (numero1,numero2){
    return numero1 * numero2
}

function divisao(numero1,numero2){
    return numero1 / numero2
}

console.log(soma(30,3))
console.log(diferenca(30,3))
console.log(multiplicacao(30,3))
console.log(divisao(30,3))


// desafios

// 1. Funções são trechos de códigos como quaisquer outros mas que podemos acessá-los mais de uma vez ao longo do 
// código através de invocações/chamadas. Então, funções podem chamar/invocar outras funções também. Sua tarefa 
// é escrever duas funções



//a) Escreva uma *arrow function* que recebe um parâmetro e imprime no console esse parâmetro

numero2 = 2
numero3 = 3
const soma = ()  => {
 return mensagem =  `olá a soma do ${numero2} com o ${numero3} é ${array(2,3)}`
}
    
// // b) Escreva outra *arrow function* que recebe dois valores como parâmetros mas **nenhum retorno.
// // ** Faça a soma entre esses valores e chame a sua primeira função mandando este resultado da soma como entrada para imprimi-lo.

const array=(numero2,numero3) => numero2 + numero3;

console.log(soma())


//exercicio 2
// Faça uma função que execute o teorema de Pitágoras, recebendo dois catetos e calculando o valor da 
// hipotenusa. Retorne este valor, invoque a função e imprima o resultado no console.

function pitagoras(cateto1,cateto2){
    return Math.hypot(cateto1,cateto2)

}

console.log(pitagoras(8,12))
