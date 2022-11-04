import express, {Request, Response} from "express"
import cors from 'cors'
import {tarefas} from './data'
import { send } from "process"

const app = express()

app.use(express.json())

app.use(cors())

//Exercício 1

app.get("/ping", (req:Request, res: Response) => {          
    res.send("Pong! 🏓")
})

//Exercício 4

app.get("/tarefas/status", (req:Request, res: Response) => {          
    const retornaStatus = req.query.status

    let tarefasConcluidas
    
    
    if(!retornaStatus || !retornaStatus) {
        res.status(400).send("É Necassário informar 'false' ou 'true' como parâmetro")
    } else if (retornaStatus === "true"){
        tarefasConcluidas = tarefas.filter((tarefa)=>{
            return tarefa.completed === true
        })
    } else if(retornaStatus === "false"){
        tarefasConcluidas = tarefas.filter((tarefa)=>{
            return tarefa.completed === false
        })
    }
    
   res.status(200).send(tarefasConcluidas) 

        
})
    

    
        

//Exercício 5

app.get("/todos", (req:Request, res: Response) => {          
    const userToAdd = Number(req.headers.authorization)
    const {title,completed} = req.body

    if(!userToAdd ||!title || !completed){
        res.status(401).send("É necessário informar todos os parâmetros.")
            
    } 
        
    const adicionarTarefa = tarefas.push({
            userId: userToAdd,
            id: Date.now(),
            title: title,
            completed: completed
        })
    

    res.status(200).send(tarefas)
})  

//Exercício 6

app.put("/todos/:tarefaid", (req:Request, res: Response) => {
    const tarefaid = Number(req.params.tarefaid)
    
    if(!tarefaid){
        res.status(401).send("É necessário informar o id da tarefa");
    }

    
    tarefas.forEach((tarefa)=>{
        if(tarefa.id === tarefaid){
        tarefa.completed = !tarefa.completed
    }})

    res.status(200).send(tarefas)

})

//Exercício 7

app.delete("/todos/:tarefaid", (req:Request, res: Response) => {
    const tarefaid = Number(req.params.tarefaid)
    

    if(!tarefaid){
        res.status(401).send("É necessário informar o id da tarefa");
    }

    let tarefaFiltrada = tarefas.filter((tarefa) =>{
    return tarefa.id !== tarefaid})
    
    res.status(200).send(tarefaFiltrada)

})

//Exercício 8

app.get("/todos/:userid", (req:Request, res: Response) => {
    const userid = Number(req.params.userid)
    

    if(!userid){
        res.status(401).send("É necessário informar o id do usuário");
    }

    let usuarioFiltrado = tarefas.filter((tarefa) =>{
    return tarefa.userId === userid})
    
    res.status(200).send(usuarioFiltrado)

})

//Exercício 9

// link da documentação:  https://documenter.getpostman.com/view/23251344/2s8YKCGNjq

//servidor

app.listen(3003, () => {
    console.log("Server is running in http://localhost:3003");
});