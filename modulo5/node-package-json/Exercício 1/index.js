const nome = process.argv[2];
const idade = Number(process.argv[3]);

function meusDados(nome, idade) {
  return `Olá, ${nome} Você tem ${idade} anos.`;
}

function meusDados(nome, idade) {
  return `Olá, ${nome} Você tem ${idade} anos. Em sete anos você terá ${
    idade + 7
  }`;
}

console.log(meusDados(nome, idade));