function recebeVariavel(variavel: any) {
    if (typeof variavel === "string") {
      return `Essa variável é uma string`;
    } else if (typeof variavel === "number") {
      return `Essa variável é um number`;
    } else if (typeof variavel === "boolean") {
      return `Essa variável é um booleano`;
    } else if (typeof variavel === "function") {
      return `Essa variável é uma função`;
    } else if (typeof variavel === "undefined") {
      return `Essa variável é  do tipo indefinida`;
    } else if (typeof variavel === "object") {
      return `Essa variável é um objeto`;
    }
  }
  
  console.log(recebeVariavel("amor"));
  console.log(recebeVariavel(3));
  console.log(recebeVariavel(true));
  console.log(recebeVariavel({ name: "John", age: 34 }));
  console.log(recebeVariavel(function () {}));