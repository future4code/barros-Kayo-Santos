// Exercícios de interpretação de código

// Exercício 1

// let array
// console.log('a. ', array) // variávem sem valor - imprimir: undefined

//array = null
//console.log('b. ', array) // imprimir: b. null

// array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
// // console.log('c. ', array.length)// imprimir: 11

// let i = 0
// // console.log('d. ', array[i]) //imprimir: 3

// //array[i+1] = 19
// //console.log('e. ', array) //imprimir: (11) [3,19,5,6,7,8,9,10,11,12,13]

// const valor = array[i+6]
// console.log('f. ', valor)//imprimir: 9

// Exercício 2

// const frase = prompt("Digite uma frase")

// console.log(frase.toUpperCase().replaceAll("A", "I"), frase.length)// imprimir: SUBI NUM ôNIBUS EM MIRROCOS - 27



// Exercícios de escrita de código

//Exercício 1

// const nomeDoUsuario = prompt("Me informe seu nome")
// const emailDoUsuario = prompt("Me informe seu melhor e-mail").trim()

// console.log(`O e-mail ${emailDoUsuario} foi cadastrado com sucesso. Seja bem-vinda(o), ${nomeDoUsuario}!`)

//Exercício 2

// let minhasComidas = ["Feijão", "Churrasco", "Pizza", "Strogonoff", "Pamonha"]

// // console.log(minhasComidas)
// // console.log(`Essas são as minhas comidas preferidas:
// // ${minhasComidas[0]}
// // ${minhasComidas[1]}
// // ${minhasComidas[2]}
// // ${minhasComidas[3]}
// // ${minhasComidas[4]}
// // `)

// let suaComida = prompt("Qual é a sua comida favorita?")

// minhasComidas[1] = suaComida


// console.log(minhasComidas)


//Exercício 3

// let listaDeTarefas = []

// let pergunta1 = prompt("Me informe uma tarefa diária que você faz!")
// let pergunta2 = prompt("Me informe outra tarefa diária que você faz!")
// let pergunta3 = prompt("Me informe mais uma tarefa diária que você faz!")

// listaDeTarefas.push(pergunta1, pergunta2, pergunta3)
// console.log(listaDeTarefas)


// let escolhaUma = prompt(`Qual atividade você mais gosta?:

// 0- ${pergunta1}
// 1- ${pergunta2}
// 2- ${pergunta3}`)

// listaDeTarefas.splice(escolhaUma,1)

// console.log(listaDeTarefas)


//DESAFIOS

//exercício 1

// let frase = "Minha vida é programar"

// const aFrase = frase.split(" ")

// console.log(aFrase)



//exercício 2

// let frutas = ["Banana", "Morango", "Abacaxi", "Laranja", "Ameixa"]

// console.log(`A palavra Abacaxi encontra-se no índice de número ${frutas.indexOf("Abacaxi")} e no array tem o total de ${frutas.length} elementos`)



