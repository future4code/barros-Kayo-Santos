//Exercício 2

type Usuario = {
    id: number,
    name: string,
    phone: string,
    email: string,
    website: string,
}

//Exercício 5

type Post = {

    id: number,
    title: string,
    body: string,
    userId: number
}

//Exercício 3

export const usuarios:Usuario[] = [
    {
        id: 1,
        name: "Harry Potter",
        phone: "+82 1234567",
        email: "harry.potter@gmail.com",
        website: "www.quadribol.com"
    },
    {
        id: 2,
        name: "Hermione Granger", 
        phone: "+66 1234567",
        email: "hermione.granger@gmail.com",
        website: "www.vira-tempo.com"
    },
    {
        id: 3,
        name: "Ron Weasley", 
        phone: "+81 1234567",
        email: "ron.weasley@gmail.com",
        website: "www.xadrez-bruxo.com"
    },
    {
        id: 4,
        name: "Rúbeo Hagrid", 
        phone: "+80 1234567",
        email: "rubeo.hagrid@gmail.com",
        website: "www.dragons.com"
    },
]

//Exercício 6

export const posts:Post[] = [
    {
        id: 1,
        title: "Encrencas",
        body: "Eu não saio por aí procurando encrenca. Em geral as encrencas é que vêm ao meu encontro.",
        userId: 1
    },
    {
        id: 2,
        title: "Felicidade",
        body: "Pode se encontrar a felicidade mesmo nas horas mais sombrias, se a pessoa se lembrar de acender a luz.",
        userId: 1
    },
    {
        id: 3,
        title: "Colher de chá",
        body: "Só porque você tem a profundidade emocional de uma colher de chá, não significa que todos nós também tenhamos.",
        userId: 2
    },
    {
        id: 4,
        title: "Expulsos",
        body: "Espero que estejam satisfeitos com o que fizeram. Podíamos ter sido mortos, ou pior, expulsos",
        userId: 2
    },
    {
        id: 5,
        title: "Brilhante",
        body: "Você é meio assustadora às vezes, sabia? Brilhante… mas assustadora.",
        userId: 3
    },
    {
        id: 6,
        title: "Borbeletas",
        body: "Sigam as aranhas, sigam as aranhas… por que não pode ser sigam as borboletas?",
        userId: 3
    },
    {
        id: 7,
        title: "Eu sou",
        body: "Eu sou o que sou e eu não tenho vergonha",
        userId: 4
    },
    {
        id: 8,
        title: "Não se preocupe",
        body: "Não adianta a gente ficar sentado se preocupando. O que tiver de ser será, e nós o enfrentaremos quando vier.",
        userId: 4
    }
]
