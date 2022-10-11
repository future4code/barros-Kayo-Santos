const primeiraLista = [
    {
      nome: "Banana"
    },
    {
      nome: "Laranja"
    }
  ];
  
  const segundaLista = [
    {
      nome: "Laranja"
    },
    {
      nome: "Cebola"
    }
  ];
  
  const geraItensUnicos = (primeira, segunda) => {
    const listaunica = [...primeira, ...segunda];
  
    for (let i = 0; i < listaunica.length; i++) {
      for (let j = i + 1; j < listaunica.length; j++) {
        if (listaunica[i].nome === listaunica[j].nome) {
          listaunica.splice(j, 1);
        }
      }
    }
  
    return listaunica;
  };
  
  console.log(geraItensUnicos(primeiraLista, segundaLista));