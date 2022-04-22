// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
  // implemente sua lógica aqui
  const altura = prompt("Me informe a altura do retângulo!")
  const largura = prompt("Me informe a largura do retângulo!")

  calculaAreaRetangulo = altura * largura
  console.log(calculaAreaRetangulo)
}


// EXERCÍCIO 02
function imprimeIdade() {
  // implemente sua lógica aqui
  const anoAtual = prompt("Me informe o ano atual!")
  const idade = prompt("Me informa a sua idade")

  imprimeIdade = anoAtual - idade
  console.log(imprimeIdade)
}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  // implemente sua lógica aqui
 return peso / (altura * altura)

}

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  // implemente sua lógica aqui
  // "Meu nome é NOME, tenho IDADE anos, e o meu email é EMAIL."
  let nome = prompt()
  let idade = prompt()
  let email = prompt()

  let imprimeInformacoesUsuario = `Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`
  console.log(imprimeInformacoesUsuario)

}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  // implemente sua lógica aqui
  
  let imprimeTresCoresFavoritas = []
  const cor1 = prompt("Me informe a sua cor preferida!")
  const cor2 = prompt("Me informe uma segunda cor que você goste!")
  const cor3 = prompt("Me informe uma terceira cor que você goste!")

  imprimeTresCoresFavoritas.push(cor1,cor2,cor3)
  console.log(imprimeTresCoresFavoritas) 

}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  // implemente sua lógica aqui
  
  return string.toUpperCase()
}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  // implemente sua lógica aqui

  return custo/valorIngresso

}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  // implemente sua lógica aqui

  return string1.length === string2.length

}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  // implemente sua lógica aqui

  return array[0]

}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  // implemente sua lógica aqui

  return array[array.length - 1]
}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  // implemente sua lógica aqui
  
  let primeiroElemento = array[0]
  let ultimoElemento = array[array.length-1]

  array.shift(array[0])
  array.pop(array[array.length-1])

  array.unshift(ultimoElemento)
  array.push(primeiroElemento)

  return array
  
} 

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  // implemente sua lógica aqui
  
  return string1.toUpperCase() === string2.toUpperCase()

}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui
  
}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui
  
  
}