// Exercício 2

type Tarefas = {
    userId: number,
    id: number,
    title: string,
    completed: boolean
}

// Exercício 3

export const tarefas: Tarefas[] = [
    {
        userId: 1,
        id: 1,
        title: "Lavar o Carro",
        completed: false
    },
    {
        userId: 1,
        id: 2,
        title: "Lavar a Moto",
        completed: true
    },
    {
        userId: 1,
        id: 3,
        title: "Lavar a Garagem",
        completed: false
    },
    {
        userId: 2,
        id: 4,
        title: "Pintar a Casa",
        completed: false
    },
    {
        userId: 2,
        id: 5,
        title: "Pintar a Cerca",
        completed: true
    },
    {
        userId: 2,
        id: 6,
        title: "Pintar a Calçada",
        completed: true
    },
]