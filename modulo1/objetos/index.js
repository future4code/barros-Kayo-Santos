// Exercícios de interpretação de código

//exercício 1
// const filme = {
// 	nome: "Auto da Compadecida", 
// 	ano: 2000, 
// 	elenco: [
// 		"Matheus Nachtergaele", "Selton Mello", "Denise Fraga", 
// 		"Virginia Cavendish"
// 		], 
// 	transmissoesHoje: [
// 		{canal: "Telecine", horario: "21h"}, 
// 		{canal: "Canal Brasil", horario: "19h"}, 
// 		{canal: "Globo", horario: "14h"}
// 		]
// }

// console.log(filme.elenco[0])// ser impresso Matheus Nachtergaele
// console.log(filme.elenco[filme.elenco.length - 1]) // ser impresso Virginia Cavendish
// console.log(filme.transmissoesHoje[2]) // ser impresso canal: "Globo", horario: "14h"

//exercício 2

// const cachorro = {
// 	nome: "Juca", 
// 	idade: 3, 
// 	raca: "SRD"
// }

// const gato = {...cachorro, nome: "Juba"}

// const tartaruga = {...gato, nome: gato.nome.replaceAll("a", "o")}

// console.log(cachorro)// nome: Jica, idade: 3 raca: SRD
// console.log(gato)// nome Juba , idade: 3 raca: SRD
// console.log(tartaruga)// nome : Jubo, idade: 3 raca: SRD

//b) O que faz a sintaxe dos três pontos antes do nome de um objeto? R: Ela copia as informações do objeto.

//exercício 3

// function minhaFuncao(objeto, propriedade) {
// 	return objeto[propriedade]
// }

// const pessoa = {
//   nome: "Caio", 
//   idade: 23, 
//   backender: false
// }

// console.log(minhaFuncao(pessoa, "backender"))//false
// console.log(minhaFuncao(pessoa, "altura"))// undefined

//b) Explique o valor impresso no console. Você sabe por que isso aconteceu? r: no primeiro log é false pois no backender está 
//com valor booleno de false. já no segundo log é undefined pois altura não está definida.


//Exercícios de escrita de código

//Exercício 1

//a) Crie um objeto. Ele deve conter duas propriedades: nome (string) e apelidos (um array que sempre terá exatamente três apelidos). 
//Depois, escreva uma função que recebe como entrada um objeto e imprime uma mensagem no modelo abaixo:   

const pessoa = {
    nome: "Kayo",
    apelidos: ["Kayn", "Kaynho", "Kayto"]

}

function nome(pessoaRecebida){
    console.log(`Eu sou ${pessoaRecebida.nome}, mas pode me chamar de: ${pessoaRecebida.apelidos[0]}, ${pessoaRecebida.apelidos[1]} ou ${pessoaRecebida.apelidos[2]}`);
}

nome(pessoa)

//b)
 const pessoa2 = {
     ...pessoa,
     apelidos: ["Xuxu", "Friend", "Noob"]
     
 }

 nome(pessoa2)

//exercício 2

const pessoa = {
    nome: "Manoel",
    idade: 30,
    profissao: "Ferroviário"
}

const pessoa2 = {
    nome: "Cristina",
    idade: 31,
    profissao: "Professora"
}

function censo(objeto1,objeto2){
   objeto1 = [objeto1.nome,objeto1.nome.length,objeto1.idade,objeto1.profissao,objeto1.profissao.length]
    objeto2= [objeto2.nome,objeto2.nome.length,objeto2.idade,objeto2.profissao,objeto2.profissao.length]
    console.log(objeto1,objeto2);
}
censo(pessoa,pessoa2)


//exercício 3

let carrinho = []

const fruta1 = {
    nome: "Maça",
    disponibilidade: true
}

const fruta2 = {
    nome: "Uva",
    disponibilidade: true
}

const fruta3 = {
    nome: "Banana",
    disponibilidade: true
}

function recebe(fru1,fru2,fru3){
   carrinho.push(fru1.nome)
   carrinho.push(fru2.nome)
   carrinho.push(fru3.nome)
   console.log(carrinho);
    
}

recebe(fruta1,fruta2,fruta3)
carrinho = [fruta1,fruta2,fruta3]
console.log(carrinho);

//Desafios

//Desafio 1

const pessoa = {
    
}

function dados(recebe){
    const pessoa = {
        nome: prompt("Qual o seu nome?"),
        idade: prompt("Qual a sua idade?"),
        profissao: prompt("Qual a sua profissão?")
    }
    
      
    console.log(pessoa)

}

dados()

// Desafio 2

function filmes (filme1,filme2){
    const filme = {
        nome: "The Batman",
        ano: 2022
    }

    const filmee = {
        nome: "Sem saída",
        ano:2022
    }

    console.log(`O primeiro filme foi lançado antes do segundo filme? ${filme.ano !== filmee.ano}`);
    console.log(`O primeiro filme foi lançado no mesmo ano do segundo? ${filme.ano === filmee.ano}`);

}

filmes()

// Desafio 3


let carrinho = []

const fruta1 = {
    nome: "Maça",
    disponibilidade: true
}

const fruta2 = {
    nome: "Uva",
    disponibilidade: true
}

const fruta3 = {
    nome: "Banana",
    disponibilidade: true
}

function recebe(fru1,fru2,fru3){
   carrinho.push(fru1.nome)
   carrinho.push(fru2.nome)
   carrinho.push(fru3.nome)
   console.log(carrinho);
}

recebe(fruta1,fruta2,fruta3)
carrinho = [fruta1,fruta2,fruta3]
console.log(carrinho);

function controle (novaFruuta){
    let fruuta = {
        ...novaFruuta,
        disponibilidade: false
   
 }
 console.log(fruuta);
}

controle(fruta1)