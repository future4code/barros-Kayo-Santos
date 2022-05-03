/* Exercícios de interpretação de código 

1. O que o código abaixo está fazendo? Qual o resultado impresso no console?

let valor = 0
for(let i = 0; i < 5; i++) {
  valor += i
}
console.log(valor)


R: o código está somando  valor com i e formando um novo valor, a cada rodada o valor do i aumenta em 1 
até chegar no total de i = 4 que é menor que 5. no console vai imprimir: 10 

2. Leia o código abaixo:

const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
for (let numero of lista) {
  		console.log(lista.indexOf(lista.length))
	}


a) O que vai ser impresso no console?

R: será impresso: 19,21,23,25,27 e 30

b) Se eu quisesse acessar o índice de cada elemento dessa lista, o for...of... é suficiente? 
Se sim, o que poderia ser usado para fazer isso?

R: podemos usar a seguinte lógica para resolver

const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
for (let numero of lista) {
        if(numero<31){
          console.log(lista.indexOf(numero))}
          }



3. Qual seria o resultado impresso no console, se o usuário digitasse o número 4 ?

const quantidadeTotal = Number(prompt("Digite a quantidade de linhas: "))
let quantidadeAtual = 0
while(quantidadeAtual < quantidadeTotal){
  let linha = ""
  for(let asteriscos = 0; asteriscos < quantidadeAtual + 1; asteriscos++){
    linha += "*"
  }
  console.log(linha)
  quantidadeAtual++
}

R: será impresso 4 linhas onde o número de asterisco irá aumentando em cada linha até o total.
*
**
***
****
*/


/* Exercícios de escrita de código 

1. Pergunte ao usuário quantos bichinhos de estimação ele tem e guarde esse dado em uma variável.

a) Se a quantidade for 0, imprima no console "Que pena! Você pode adotar um pet!"

b) Se a quantidade for maior que 0, solicite que o usuário digite os nomes deles, um por um, e guarde esses nomes em um array

let quantidadeDePets = Number(prompt("Quantos bichinhos de estimação você tem?"))
numero = 0
nomePets = []

if(quantidadeDePets < 1){
    console.log("Que pena! Você pode adotar um pet!");
}else{
    for (let numero = 0; numero < quantidadeDePets; numero++){
        let nomeBichinho = prompt("Qual o nome do seu bichinho?")
        nomePets.push(nomeBichinho)           
        
    }
    console.log(nomePets);
}

2. Considere que você tenha acesso a um array  (chamado de 'array original') que é composto somente de números. 
Baseando-se nisso, crie uma função para cada um dos itens abaixo, realizando as operações pedidas:

a) Escreva um programa que imprime cada um dos valores do array original.

let original = [10,20,30,40,50,60,70]


function imprime(arrays) {
    for(let array of arrays){
        console.log(array);  
    }
        
}    

imprime(original) 

b) Escreva um programa que imprime cada um dos valores do array original divididos por 10

let original = [10,20,30,40,50,60,70]


function imprime(arrays) {
    for(let array of arrays){
        console.log(array/10);  
    }
        
}    

imprime(original)

c) Escreva um programa que crie um novo array contendo, somente, os números pares do array original e imprima esse novo array

let original = [10,21,30,41,50,61,70]


function imprime(arrays) {
    for(let array of arrays){
        if(array % 2 === 0){
            console.log(array);
        }
    }
        
}    

imprime(original)




*/

