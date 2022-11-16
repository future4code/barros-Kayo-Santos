import express, {Request, Response} from "express"

import cors from 'cors'
import { users } from "./data"
import { error } from "console"

const app = express()

app.use(express.json())

app.use(cors())

//exercício 1

//a) método HTTP Get
//b) entidade /users

app.get('/users', (req: Request, res: Response) => {
    res.status(200).send(users)
})

//exercício 2
//a) passei os parâmetros por query, como é uma busca e tem mais de uma resposta, acredito que seja a melhor forma.
//b) criei uma condicional na linha 35 que faz com que só aceite os dois tipos predefinidos.

app.get('/users/type', (req: Request, res: Response) => {
    let errorCode = 400
    let typeId = req.query.type as string

    try{
        if(!typeId){
            errorCode = 404
            throw new Error("É necessário informar um tipo de usuário: ADMIN ou NORMAL");            
        }
        if(typeId.toUpperCase() !== "ADMIN" && typeId.toUpperCase() !== "NORMAL"){
            errorCode = 402
            throw new Error("Insira um tipo de usuário válido, ADMIN ou NORMAL");            
        }

        const userSearch = users.filter((user) =>{
            return user.type.toUpperCase() === typeId.toUpperCase()
        })

        res.status(200).send(userSearch)

    }catch(e:any){
        res.status(errorCode).send(e.message);
    }
})

//exercício 3
//a) passei os parâmetros por query, como é uma busca, acredito que seja a melhor forma.

app.get('/users/name', (req: Request, res: Response) => {
    let errorCode = 400;
    let userName = req.query.name as string;

    try {
        if(!userName){
            errorCode = 404;
            throw new Error("É necessário informar um nome de usuário");            
        }
        if(typeof userName !== "string"){
            errorCode = 404
            throw new Error("é necessário que usuário seja do tipo string");            
        }

        let userSearch = users.find((user) => {
            return user.name.toLowerCase() === userName.toLowerCase()
        })

        if(!userSearch){
            errorCode = 402
            throw new Error("Usuário não encontrado");            
        }

        let filteredUser = users.filter((user) =>{
            return user.name.toLowerCase() === userName.toLowerCase()
        })

        res.status(200).send(filteredUser)

    }catch (e:any){
        res.status(errorCode).send(e.message)
    }
})

//exercício 4
//a) Mudei para put e o endpoint continuou funcionando.
//b) O método PUT só é apropriado para quando vamos modificar todos os elementos, o que não é o caso.

app.put('/users', (req: Request, res: Response) => {
    let errorCode = 400
    const {name, email, type, age} = req.body

    try{
        if(!name || !email || !type || !age){
            errorCode = 404
            throw new Error("É necessário informar todos os parâmetros");            
        }
        if(type.toUpperCase() !== "ADMIN" && type.toUpperCase() !== "NORMAL"){
            errorCode = 402
            throw new Error("Insira um tipo de usuário válido, ADMIN ou NORMAL"); 
        }

        users.push({
            id: Date.now(),
            name,
            email,
            type: type.toUpperCase(),
            age
        })

        res.status(200).send(users)


    }catch(e:any){
        res.status(errorCode).send(e.message)
    }
})

//exercício 5

app.put('/users/:id', (req: Request, res: Response) => {
    let errorCode = 400
    let userId = Number(req.params.id)
    let {name} = req.body

    try{
        if(isNaN(userId)){
            errorCode = 404
            throw new Error("É necessário informar um id de usuário");            
        }
        if(!name){
            errorCode = 402
            throw new Error("É ncessario enviar o novo nome");            
        }

        let userSearch = users.find((user) => {
            return user.id === userId
        })

        if(!userSearch){
            errorCode = 404
            throw new Error("Usuário não encontrado");            
        }

        users.forEach((user) => {
            if(user.id === userId){
                user.name = `${name} -ALTERADO`
            }
        })

        res.status(200).send(users)



    }catch(e:any){
        res.status(errorCode).send(e.message)
    }
})

//exercício 6

app.patch('/users/:id', (req: Request, res: Response) => {
    let errorCode = 400
    let userId = Number(req.params.id)
    let {name} = req.body

    try{
        if(isNaN(userId)){
            errorCode = 404
            throw new Error("É necessário informar um id de usuário");            
        }
        if(!name){
            errorCode = 402
            throw new Error("É ncessario enviar o novo nome");            
        }

        let userSearch = users.find((user) => {
            return user.id === userId
        })

        if(!userSearch){
            errorCode = 404
            throw new Error("Usuário não encontrado");            
        }

        users.forEach((user) => {
            if(user.id === userId){
                user.name = `${name} -REALTERADO`
            }
        })

        res.status(200).send(users)



    }catch(e:any){
        res.status(errorCode).send(e.message)
    }
})

//exercício 7

app.delete('/users/:id', (req: Request, res: Response) => {
    let errorCode = 400
    let userId = Number(req.params.id)
    
    try{
        if(isNaN(userId)){
            errorCode = 404
            throw new Error("É necessário informar um id de usuário");            
        }
        
        let userSearch = users.find((user) => {
            return user.id === userId
        })

        if(!userSearch){
            errorCode = 404
            throw new Error("Usuário não encontrado");            
        }

        let userDeleted = users.filter((user) => {
            return user.id !== userId
        })

        res.status(200).send(userDeleted)



    }catch(e:any){
        res.status(errorCode).send(e.message)
    }
})




app.listen(3003, () => {
    console.log("Server is running in http://localhost:3003");
});
