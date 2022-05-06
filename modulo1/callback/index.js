/*

--- Exercícios de interpretação de código ---

1. Leia o código abaixo

const usuarios = [
    { nome: "Amanda Rangel", apelido: "Mandi" },
    { nome: "Laís Petra", apelido: "Laura" },
    { nome: "Letícia Chijo", apelido: "Chijo" }
  ]
  
  const novoArrayA = usuarios.map((item, index, array) => {
     console.log(item, index, array)
})

a) O que vai ser impresso no console?
R: vai aparecer um novo array contendo cada item,seu indice e array completo igual o usuarios.

2. Leia o código abaixo

const usuarios = [
    { nome: "Amanda Rangel", apelido: "Mandi" },
    { nome: "Laís Petra", apelido: "Laura" },
    { nome: "Letícia Chijo", apelido: "Chijo" },
  ]
  
  const novoArrayB = usuarios.map((item, index, array) => {
     return item.nome
  })
  
  console.log(novoArrayB)

a) O que vai ser impresso no console?
R: novo array com os nomes. novoArrayB: ["Amanda Rangel", "Laís Petra", "Letícia Chijo"]

3. Leia o código abaixo

const usuarios = [
    { nome: "Amanda Rangel", apelido: "Mandi" },
    { nome: "Laís Petra", apelido: "Laura" },
    { nome: "Letícia Chijo", apelido: "Chijo" },
]
  
  const novoArrayC = usuarios.filter((item, index, array) => {
     return item.apelido !== "Chijo"
})
  
console.log(novoArrayC)

a) O que vai ser impresso no console?
R: será impresso novo array, novoArrayC = [{"Amanda Rangel", apelido: "Mandi"}, {"Laís Petra", apelido: "Laura"}]


--- Exercícios de escrita de código ---

1. Dado o seguinte array de cachorrinhos que são clientes de um pet shop, 
realize as operações pedidas nos itens abaixo utilizando as funções de array map e filter:

const pets = [
    { nome: "Lupin", raca: "Salsicha"},
    { nome: "Polly", raca: "Lhasa Apso"},
    { nome: "Madame", raca: "Poodle"},
    { nome: "Quentinho", raca: "Salsicha"},
    { nome: "Fluffy", raca: "Poodle"},
    { nome: "Caramelo", raca: "Vira-lata"},
]

a) Crie um novo array que contenha apenas o nome dos doguinhos

const nomePets = pets.map ((pet) =>{
    return pet.nome
})

console.log(nomePets);

b) Crie um novo array apenas com os cachorros salsicha

const nomePetsSalsicha = pets.filter((pet)=>{
    if(pet.raca === "Salsicha"){
        return pet.nome
    }
})

console.log(nomePetsSalsicha);

c) Crie um novo array que possuirá mensagens para enviar para todos os clientes que são poodles. 
A mensagem deve ser: "Você ganhou um cupom de desconto de 10% para tosar o/a [NOME]!"

const nomePetPoodle = pets.filter((pet)=>{
    if(pet.raca === "Poodle"){
        console.log(`Você ganhou um cupom de desconto de 10% para tosar o/a ${pet.nome}!`);
    }
})


2. Dado o seguinte array de produtos, realize as operações pedidas nos itens abaixo utilizando as funções de array map e filter:

const produtos = [
   { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
   { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
   { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
   { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
   { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
   { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
   { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
   { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
   { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
   { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
]

a) Crie um novo array que contenha apenas o nome de cada item

const nomeProdutos = produtos.map((produto) => {
    return produto.nome
})

console.log(nomeProdutos);

b) Crie um novo array que contenha um objeto com o nome e o preço de cada item, aplicando 5% de desconto em todos eles

 const descontoProdutos = produtos.map ((produto) => {
        let produtosDesconto = {
            nome: produto.nome,
            preço: produto.preco * 0.95
        }
        return produtosDesconto
 })

console.log(descontoProdutos);

c) Crie um novo array que contenha apenas os objetos da categoria Bebidas

 const nomeProdutosBebidas = produtos.filter((produto) => {
    return produto.categoria === "Bebidas"
})

console.log(nomeProdutosBebidas);

d) Crie um novo array que contenha apenas os objetos cujo nome contenha a palavra "Ypê".

 const nomeProdutosYpe = produtos.filter((produto) => {
    if(produto.nome.includes("Ypê") === true){
        return produto.nome
    }
})

console.log(nomeProdutosYpe);

e) Crie um novo array onde cada item é uma frase "Compre [NOME] por [PREÇO]".
 Esse array deve conter frases apenas dos itens cujo nome contenha a palavra "Ypê"


 const nomeProdutosYpe = produtos.filter((produto) => {
    if(produto.nome.includes("Ypê") === true){
        return produto.nome
    }
})



const nomeFrase = nomeProdutosYpe.map((produto)=>{
    return `Compre ${produto.nome} por ${produto.preco}`
})

console.log(nomeFrase);



*/








