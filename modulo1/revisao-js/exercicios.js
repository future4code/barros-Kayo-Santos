// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// EXERCÍCIO 01
function retornaTamanhoArray(array) {
   return array.length
}

// EXERCÍCIO 02
function retornaArrayInvertido(array) {
  return array.reverse()
}

// EXERCÍCIO 03
function retornaArrayOrdenado(array) {
    function crescente (a,b){
        return a - b
    }
return array.sort(crescente)
}

// EXERCÍCIO 04
function retornaNumerosPares(array) {
 let numerosPares = []
  for(let arr of array){
  if(arr % 2 === 0){
    numerosPares.push(arr)
  }
}
return numerosPares
}

// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {
  let numerosPares = []
  for(let arr of array){
  if(arr % 2 === 0){
    numerosPares.push(arr * arr)
  }
}
return numerosPares
}

// EXERCÍCIO 06
function retornaMaiorNumero(array) {
  let maiorNumeroArray = 0
  for(let i = 0 ; i < array.length; i++){
    let numeroDoArray = array[i]
    if(numeroDoArray > maiorNumeroArray){
      maiorNumeroArray = numeroDoArray
    }
  }
return maiorNumeroArray
}

// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {

let menor
  if(num1 > num2){
    maior = num1
    menor = num2
  }else{
    maior = num2
    menor = num1
  }

const objetoEntreDoisNumero = {
  maiorNumero: maior,
  maiorDivisivelPorMenor: maior % menor === 0,
  diferenca: maior - menor
}
return objetoEntreDoisNumero
}

// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
  let numerosPares = []    
   for(i= 0; numerosPares.length < n; i++){
      if(i % 2 === 0){
       numerosPares.push(i)
     }
   }
   return numerosPares
}


// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {
if(ladoA === ladoB && ladoA === ladoC && ladoB === ladoC){
  return "Equilátero"
} else if(ladoA !== ladoB && ladoA !== ladoC && ladoB !== ladoC){
  return "Escaleno"
} else {
  return "Isósceles"
}
}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
  function crescente (a,b){
    return a - b
}
array.sort(crescente)

return [array[array.length-2], array[1]]
  
}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
  const filmes = {
    nome: "O Diabo Veste Prada",
    ano: 2006,
    diretor: "David Frankel",
    atores: ["Meryl Streep", "Anne Hathaway", "Emily Blunt", "Stanley Tucci"],

  }
   return `Venha assistir ao filme ${filmes.nome}, de ${filmes.ano}, dirigido por ${filmes.diretor} e estrelado por ${filmes.atores[0]}, ${filmes.atores[1]}, ${filmes.atores[2]}, ${filmes.atores[3]}.`
}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
  
  const pessoaAnonima = {
     ...pessoa,
     nome: "ANÔNIMO"
   }
   return pessoaAnonima
}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
  
  const pessoaAutorizada = pessoas.filter((pessoa)=>{
    if(pessoa.altura > 1.5 && pessoa.idade > 14 && pessoa.idade <= 60){
      return pessoas
    }
  }) 
   return pessoaAutorizada
}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
  
  const pessoaNaoAutorizada = pessoas.filter((pessoa)=>{
    if(pessoa.altura < 1.5){
      return pessoas
    } else if(pessoa.idade <= 14 || pessoa.idade >60){
      return pessoas
    }
  }) 
   return pessoaNaoAutorizada

}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {
  for(let i = 0; i<contas.length; i++){
    let armazenandoAsCompras = []; //variável que vai representar a soma das compras
    calculaSaldo(contas); //chamando a função para poder ativa-la


    function calculaSaldo(numero) {
      numero[i].compras.forEach(nr => armazenandoAsCompras.push(nr * -1));
      // aqui vamos pegar cada valor das compras e multiplicar por -1 e depois armazenar na variável entradas
    }

    function somaNumeros(numeros) {
      return numeros.reduce((sum,nr) => sum + nr, 0); //somando os valores das compras
      
    }
    contas[i].compras = [] //substituindo as compras por array vazio
    contas[i].saldoTotal += somaNumeros(armazenandoAsCompras) // e calculando a soma do saldo + (- a soma das compras)
  }
  
  return contas
}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
  
  function ordemAlfabetica(a,b) {
    if(a.nome > b.nome){
      return 1
    }else if(a.nome < b.nome){
      return -1
    }
  }
  return consultas.sort(ordemAlfabetica)
}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {

  for(let i = 0; i < 3; i++){
    consultas.sort((a,b) => a.dataDaConsulta.split("/")[i] > b.dataDaConsulta.split("/")[i] ? 1 : a.dataDaConsulta.split("/")[i] < b.dataDaConsulta.split("/")[i] ? -1 : 0)
  } 
 return consultas
  
}

 