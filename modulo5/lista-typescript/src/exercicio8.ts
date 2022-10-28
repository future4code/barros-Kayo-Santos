function calculaFatorial(palavra: string): number {
    let contaLetra = palavra.length;
  
    if (contaLetra === 1 || contaLetra === 0) {
      return 1;
    } else {
      for (let i = 1; i < palavra.length; i++) {
        contaLetra *= i;
      }
      return contaLetra;
    }
  }
  
  console.log(calculaFatorial("labenu"));