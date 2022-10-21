type cliente = {
    cliente: string;
    saldoTotal: number;
    debitos: number[];
  };
  
  const clientes: cliente[] = [
    { cliente: "João", saldoTotal: 1000, debitos: [100, 200, 300] },
    { cliente: "Paula", saldoTotal: 7500, debitos: [200, 1040] },
    { cliente: "Pedro", saldoTotal: 10000, debitos: [5140, 6100, 100, 2000] },
    { cliente: "Luciano", saldoTotal: 100, debitos: [100, 200, 1700] },
    { cliente: "Artur", saldoTotal: 1800, debitos: [200, 300] },
    { cliente: "Soter", saldoTotal: 1200, debitos: [] }
  ];
  
  function clientesEmprestimo(clientes: cliente[]) {
    clientes.forEach((debito) => {
      let totalDeDebitos = 0;
      debito.debitos.forEach((item) => {
        totalDeDebitos += item;
      });
      debito.saldoTotal -= totalDeDebitos;
      debito.debitos = [];
    });
  
    let clienteHabilitado = clientes.filter((d) => d.saldoTotal < 0);
  
    return clienteHabilitado;
  }
  
  console.log(clientesEmprestimo(clientes));