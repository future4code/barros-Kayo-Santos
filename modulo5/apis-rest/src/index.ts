import express, {Request, Response} from "express"

import cors from 'cors'
import { send } from "process"
import { users } from "./data"

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
            return user.type === typeId.toUpperCase()
        })

        res.status(200).send(userSearch)

    }catch(e:any){
        res.status(errorCode).send(e.message);
    }
})





app.listen(3003, () => {
    console.log("Server is running in http://localhost:3003");
});
