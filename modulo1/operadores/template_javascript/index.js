// Exercícios de interpretação de código

// exercício 1

const bool1 = true
const bool2 = false
const bool3 = !bool2

let resultado = bool1 && bool2
console.log("a. ", resultado) // false

resultado = bool1 && bool2 && bool3 
console.log("b. ", resultado) // false

resultado = !resultado && (bool1 || bool2) 
console.log("c. ", resultado) //true

console.log("d. ", typeof resultado) // boolean

// exercício 2

let primeiroNumero = prompt("Digite um numero!") // a variável prompt gera automaticamente uma string, digitei 15
let segundoNumero = prompt("Digite outro numero!") // a variável prompt gera automaticamente uma string, digitei 15

const soma = primeiroNumero + segundoNumero // em vez de somar está concatenando

console.log(soma) // será impresso 1515


// exercício 3

let primeiroNumero = Number(prompt("Digite um numero!")) // convertendo de string para number, digitei 15
let segundoNumero = Number(prompt("Digite outro numero!")) // convertendo de string para number, digitei 15

const soma = primeiroNumero + segundoNumero

console.log(soma) // será impresso 30


// Exercícios de escrita de código

// exercício 1

let suaIdade = Number(prompt("Digite a sua idade!"))
let idadeDomelhorAmigo = Number(prompt("Qual a idade do(a) seu(a) melhor amigo(a)? "))
let comparacaoIdade = (suaIdade > idadeDomelhorAmigo)
let diferencaIdade = (suaIdade - idadeDomelhorAmigo)

console.log("a. ", "Sua idade é maior do que a do seu melhor amigo?", comparacaoIdade)
console.log("b. ", "A diferença da idade de vocês é de: ", diferencaIdade, "anos")

exercício 2

let numeroPar = Number(prompt("Insira um número Par!"))
let divisao = numeroPar % 2
console.log(divisao)

Sempre que eu coloco um número par a resposta do resto é sempre 0, isso significa que a divisão é exata
Sempre que eu coloco um número ímpar a resposta do resto é sempre 1, isso significa que a divisão não é exata.


// exercício 3

let suaIdade = Number(prompt("Qual a sua idade?"))
let idadeEmMeses = suaIdade * 12
let idadeEmDias = suaIdade * 365
let idadeEmHoras = suaIdade * 8760
console.log("A sua idade em meses é equivalente a: ", idadeEmMeses, "meses.")
console.log("A sua idade em dias é equivalente a: ", idadeEmDias, "dias.")
console.log("A sua idade em horas é equivalente a: ", idadeEmHoras, "horas.")


// exercício 4

let numero1 = Number(prompt("Me diga um número!"))
let numero2 = Number(prompt("Me diga outro número!"))

let comparacao1 = numero1 > numero2
let comparacao2 = numero1 === numero2
let comparacao3 = numero1 % numero2
a = 0
let resultado1 = comparacao3 === a
let comparacao4 = numero2 % numero1
let resultado2 = comparacao4 === a 

console.log("O primeiro numero é maior que segundo?", comparacao1)
console.log("O primeiro numero é igual ao segundo?", comparacao2)
console.log("O primeiro numero é divisível pelo segundo?", resultado1)
console.log("O segundo numero é divisível pelo primeiro?", resultado2)


// DESAFIO
// questão 1


let f = 77
let c = 80
let c1 = 30
let ftoK = (f - 32)*(5/9) + 273.15
let ctoF = c * (9/5) + 32
let ctoF1 = c1 * (9/5) + 32
let ctoK = c + 273


console.log("77°F é equivalente a", ftoK, "K")
console.log("80°C é equivalente a", ctoF, "F")


console.log("30°C é equivalente a", ctoF1, "F")
console.log("30°C é equivalente a", ctoK, "K")


let temperaturaC = Number(prompt("Transforme ºC para ºK"))
let ctoK1 = temperaturaC + 273
console.log("A temperatura informada é equivalente a", ctoK1, "K")

// questão 2

let kwh = 0.05
let consumo = 280 * 0.05
let desconto = consumo * 0.15
let valorDesconto = consumo - desconto
console.log("280 quilowatt-horas de consumo, é equivalente a:", consumo, "reais")
console.log("com desconto de 15% o valor passa a ser de:", valorDesconto)

// questão 3

let lb = 20
let lbToKg = lb / 2.205
let oz = 10.5
let ozToKg = oz /35.274
let mi = 100
let miToM = mi * 1609
let ft = 50
let ftToM = ft / 3.281
let gal = 103.56
let galToL = gal * 3.785
let xic = 450
let xicToL = xic * 0.24


console.log("a.","20lb equivalem a", lbToKg, "kg")
console.log("b.", "10.5oz equivalem a", ozToKg, "kg")
console.log("c.", "100mi equivalem a", miToM, "m" )
console.log("d.", "50ft equivalem a",ftToM,"m")
console.log("e.", "103.56 gal equivalem a", galToL, "L")
console.log("f.", "450 xícaras equivalem a",xicToL,"L")


let distanciaFt = Number(prompt("transforme Ft para M"))
let convertido = distanciaFt/3.281
console.log("A informada informada é equivalente a", convertido, "m")
