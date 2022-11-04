import express, {Request, Response} from "express"

import cors from 'cors'
import { posts, usuarios } from "./data"




const app = express()

app.use(express.json())

app.use(cors())




//Exercício 1

app.get("/", (req:Request, res:Response) => {          
    res.status(200).send("Hello from Express");
});


//Exercício 4

app.get("/users", (req:Request, res:Response) => {   
    let users = usuarios
          
    res.status(200).send(users);
});

//Exercício 7

app.get("/posts", (req:Request, res:Response) => {   
    let post = posts
          
    res.status(200).send(post);
});

//Exercício 8

app.get("/posts//users/:id", (req:Request, res:Response) => {   
    let postId = req.params.id

    
    
    let postUsers = posts.filter((post)=>{
        return post.userId === Number(postId);
    })

    if(!postId || !postUsers){
        res.status(400).send("É necessário informar um Id");
    }
          
    res.status(200).send(postUsers);
});


//Servidor

app.listen(3003, () => {
    console.log("Server is running in http://localhost:3003");
});

