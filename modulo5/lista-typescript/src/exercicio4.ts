enum Setor {
    MARKETING = "marketing",
    VENDAS = "vendas",
    FINACEIRO = "financeiro"
  }
  
  type colaborador = {
    nome: string;
    salário: number;
    setor: Setor;
    presencial: boolean;
  };
  
  const colaboradores: colaborador[] = [
    { nome: "Marcos", salário: 2500, setor: Setor.MARKETING, presencial: true },
    { nome: "Maria", salário: 1500, setor: Setor.VENDAS, presencial: false },
    { nome: "Salete", salário: 2200, setor: Setor.FINACEIRO, presencial: true },
    { nome: "João", salário: 2800, setor: Setor.MARKETING, presencial: false },
    { nome: "Josué", salário: 5500, setor: Setor.FINACEIRO, presencial: true },
    { nome: "Natalia", salário: 4700, setor: Setor.VENDAS, presencial: true },
    { nome: "Paola", salário: 3500, setor: Setor.MARKETING, presencial: true }
  ];
  
  function colaboradorMarketing(colaboradores: colaborador[]): colaborador[] {
    let marketingPresencial: colaborador[] = colaboradores.filter(
      (presencial) => {
        return (
          presencial.setor === Setor.MARKETING && presencial.presencial === true
        );
      }
    );
    return marketingPresencial;
  }
  
  console.log(colaboradorMarketing(colaboradores));