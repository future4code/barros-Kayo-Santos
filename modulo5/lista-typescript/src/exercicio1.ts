function identidade(nome: string, dataDeNascimento: string) {
    const data = dataDeNascimento.split("/");
    const dia = data[0];
    const mes = data[1];
    const ano = data[2];
    return `Olá me chamo ${nome}, nasci no dia ${dia} do mês ${mes} do ano de ${ano}`;
  }
  
  console.log(identidade("kayo", "15/04/1989"));

