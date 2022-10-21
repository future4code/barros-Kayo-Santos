enum GENERO {
    ACAO = "ação",
    DRAMA = "drama",
    COMEDIA = "comédia",
    ROMANCE = "romance",
    TERROR = "terror"
  }
  
  type Filmes = {
    nomeDoFilme: string;
    anoDeLancamento: number;
    genero: GENERO;
    pontuacao?: number;
  };
  
  function catalogo(
    nome: string,
    ano: number,
    genero: GENERO,
    pontuacao?: number
  ): Filmes {
    const dadosFilme = {
      nomeDoFilme: nome,
      anoDeLancamento: ano,
      genero: genero,
      pontuacao: pontuacao
    };
  
    const dadosFilme2 = {
      nomeDoFilme: nome,
      anoDeLancamento: ano,
      genero: genero
    };
  
    if (typeof pontuacao !== "undefined") {
      return dadosFilme;
    } else {
      return dadosFilme2;
    }
  }
  
  console.log(catalogo("fúria", 1960, GENERO.ACAO, 75));
  console.log(catalogo("risos", 1980, GENERO.COMEDIA));