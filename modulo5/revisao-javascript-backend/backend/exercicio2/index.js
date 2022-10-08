const clientes = [
    { id: 1, nome: "Fulano" },
    { id: 2, nome: "Ciclano" },
    { id: 3, nome: "Beltrano" },
    { id: 4, nome: "Fulana" }
  ];
  
  const cadastraCliente = (id, cliente) => {
    const regex = /\W|_/;
  
    if (typeof cliente !== "string") {
      return `Erro. Parâmetro inválido: '${cliente}'. Só é permitido nomes.`;
    } else if (regex.test(cliente)) {
      return `Erro. Parâmetro inválido: '${cliente}'. Proibido Caracteres especiais como @#$%&*.`;
    } else {
      let confereId = false;
      for (let i = 0; i < clientes.length; i++) {
        if (clientes[i].id === id) {
          confereId = true;
        }
      }
  
      if (confereId === true) {
        return `Erro. Parâmetro inválido: '${id}'. Id do cliente já existe.`;
      } else {
        clientes.push({ id: id, nome: cliente });
        return clientes;
      }
    }
  };




console.log(cadastraCliente(5, "Fabiana"));
console.log(cadastraCliente(6, "Kayo"));
console.log(cadastraCliente(7, "K@yo"));
console.log(cadastraCliente(8, 8));
console.log(cadastraCliente(5, "Manoel"));



//tabuada

let tabuada = [];

const geraTabuada = (numero) => {
  if (typeof numero !== "number") {
    return `Erro. Parâmetro inválido (${numero}) só é permitido números.`;
  } else if (numero > 10 || numero < 1) {
    return `Erro. Parâmetro inválido (${numero}) número precisa valer entre 1 e 10.`;
  } else {
    return (tabuada = [
      `${numero} X 0 = ${numero * 0}`,
      `${numero} X 1 = ${numero * 1}`,
      `${numero} X 2 = ${numero * 2}`,
      `${numero} X 3 = ${numero * 3}`,
      `${numero} X 4 = ${numero * 4}`,
      `${numero} X 5 = ${numero * 5}`,
      `${numero} X 6 = ${numero * 6}`,
      `${numero} X 7 = ${numero * 7}`,
      `${numero} X 8 = ${numero * 8}`,
      `${numero} X 9 = ${numero * 9}`,
      `${numero} X 10 = ${numero * 10}`
    ]);
  }
};

console.log(geraTabuada(2));
console.log(geraTabuada(3));
console.log(geraTabuada(0));
console.log(geraTabuada(11));
console.log(geraTabuada("amor"));
