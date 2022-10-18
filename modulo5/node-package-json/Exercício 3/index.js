let listaTarefas = ["Lavar a louça"];

const tarefa = process.argv[2];

function fazerTarefas(tarefa) {
  let tarefas = [...listaTarefas];
  tarefas.push(tarefa);
  return tarefas;
}
console.log(fazerTarefas(tarefa));