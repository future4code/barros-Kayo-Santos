function verificaCpf(cpf: string): boolean {
    const somaDez: number =
      Number(cpf.charAt(0)) * 10 +
      Number(cpf.charAt(1)) * 9 +
      Number(cpf.charAt(2)) * 8 +
      Number(cpf.charAt(4)) * 7 +
      Number(cpf.charAt(5)) * 6 +
      Number(cpf.charAt(6)) * 5 +
      Number(cpf.charAt(8)) * 4 +
      Number(cpf.charAt(9)) * 3 +
      Number(cpf.charAt(10)) * 2;
  
    const somaOnze: number =
      Number(cpf.charAt(0)) * 11 +
      Number(cpf.charAt(1)) * 10 +
      Number(cpf.charAt(2)) * 9 +
      Number(cpf.charAt(4)) * 8 +
      Number(cpf.charAt(5)) * 7 +
      Number(cpf.charAt(6)) * 6 +
      Number(cpf.charAt(8)) * 5 +
      Number(cpf.charAt(9)) * 4 +
      Number(cpf.charAt(10)) * 3 +
      Number(cpf.charAt(12)) * 2;
  
    const verificaIguais: number =
      Number(cpf.charAt(0)) +
      Number(cpf.charAt(1)) +
      Number(cpf.charAt(2)) +
      Number(cpf.charAt(4)) +
      Number(cpf.charAt(5)) +
      Number(cpf.charAt(6)) +
      Number(cpf.charAt(8)) +
      Number(cpf.charAt(9)) +
      Number(cpf.charAt(10)) +
      Number(cpf.charAt(12)) +
      Number(cpf.charAt(13));
  
    const moduloPrimeiro: number = somaDez % 11;
    const moduloSegundo: number = somaOnze % 11;
  
    let dvUm: number = 11 - moduloPrimeiro;
    if (dvUm >= 10) {
      dvUm = 0;
    }
  
    let dvDois: number = 11 - moduloSegundo;
    if (dvDois >= 10) {
      dvDois = 0;
    }
  
    if (verificaIguais / 11 === Number(cpf.charAt(0))) {
      return false;
    } else if (
      dvUm === Number(cpf.charAt(12)) &&
      dvDois === Number(cpf.charAt(13))
    ) {
      return true;
    } else {
      return false;
    }
  }
  
  console.log(verificaCpf("065.545.064-54"));
  console.log(verificaCpf("065.545.064-99"));
  console.log(verificaCpf("999.999.999-99"));
  console.log(verificaCpf("222.222.222-22"));
  console.log(verificaCpf("404.130.394-04"));
  console.log(verificaCpf("516.365.304-00"));
  