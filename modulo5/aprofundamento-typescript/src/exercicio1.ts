// a) let minhaString:string = 5; dá erro pois, um valor do tipo 'number' não pode ser atribuído ao tipo 'string'.
//b) Para que uma variável aceite mais de um tipo de valor é necessário usar o union type.

let meuNumero: number | string = 5;
meuNumero = "string";

//c)

type Pessoa = {
    nome: string,
    idade: number,
    corFavorita: CoresArcoIris
}


//d)
enum CoresArcoIris {
    VERMELHO = "vermelho",
    LARANJA = "laranja",
    AMARELO = "amarelo",
    VERDE = "verde",
    AZUL = "azul",
    ANIL = "anil",
    VIOLETA = "violeta"
}


const pessoa1: Pessoa = {
    nome: "kayo",
    idade: 33,
    corFavorita: CoresArcoIris.VIOLETA
}

const pessoa2: Pessoa = {
    nome: "Fabi",
    idade: 28,
    corFavorita: CoresArcoIris.VERDE
}

const pessoa3: Pessoa = {
    nome: "Manoel",
    idade: 50,
    corFavorita: CoresArcoIris.AZUL
}


