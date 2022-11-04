import express,{Request, Response} from "express"

import cors from 'cors'
import { produtos } from "./data"

const app = express()

app.use(express.json())

app.use(cors())

//exercício 1
app.get("/test", (req:Request, res:Response) => {
    res.status(201).send('Servidor rodando na porta 3003')
})

//exercício 4

app.post("/produtos", (req:Request, res:Response) => {
    const {name, price} = req.body

    try {
       if(!name){
        const erro = new Error("É necessário informar o nome do produto!")
        erro.name = "nameProductNotFound"
        throw erro
       }
       if(typeof name !== "string"){
        const erro = new Error("O Parâmetro name deve ser do tipo string!")
        erro.name = "nameProductString"
        throw erro
       }
       if(!price){
        const erro = new Error("É necessário informar o valor do produto!")
        erro.name = "priceProductNotFound"
        throw erro
       } 
       if(typeof price !== "number"){
        const erro = new Error("O Parâmetro price deve ser do tipo number!")
        erro.name = "priceProductNumber"
        throw erro
       }
       if(price <= 0){
        const erro = new Error("É necessário que o price seja maior ou igual a 0!")
        erro.name = "priceProductInvalid"
        throw erro
       }  

       const newProduct = produtos.push({
        id: Date.now(),
        name,
        price,
    })
    
    res.status(200).send(produtos)

    }catch(e: any){
        if(e.name == "nameProductNotFound"){
            res.status(422).send(e.message)
        }else if(e.name == "priceProductNotFound"){
            res.status(422).send(e.message)
        }else if(e.name == "nameProductString"){
            res.status(422).send(e.message)
        }else if(e.name == "priceProductNumber"){
            res.status(422).send(e.message)
        }else if(e.name == "priceProductInvalid"){
            res.status(422).send(e.message)  
        }else {
            res.status(500).send(e.message)
        }
    }
    
  
})

//exercício 5
app.get("/produtos", (req:Request, res:Response)=>{
    const allProducts = produtos
    res.status(200).send(allProducts)
})

//exercício 6
app.put("/produtos/:id", (req:Request, res:Response)=>{
    const id = Number(req.params.id)
    const price = Number(req.body.price)
    
    try {
        if(!price){
            const erro = new Error("É necessário informar o valor do produto!")
            erro.name = "priceProductNotFound"
            throw erro
           } 
           if(typeof price !== "number"){
            const erro = new Error("O Parâmetro price deve ser do tipo number!")
            erro.name = "priceProductNumber"
            throw erro
           }
           if(price <= 0){
            const erro = new Error("É necessário que o price seja maior ou igual a 0!")
            erro.name = "priceProductInvalid"
            throw erro
           }
           if(!id){
            const erro = new Error("É necessário informar o id do produto!")
            erro.name = "idProductNotFound"
            throw erro
           } 

           const produtoAlterado = produtos.find((produto)=>{
            return produto.id === id})
       
            
             if(!produtoAlterado ){
            const erro = new Error("É necessário informar um id válido!")
            erro.name = "NotFound"
            throw erro
           } 

       produtos.forEach((produto)=>{
            if(produto.id === id){
               produto.price = price 
        }})

           

       
        
        res.status(200).send(produtos)
    }catch(e:any){
        if(e.name == "priceProductNotFound"){
            res.status(422).send(e.message)
        }else if(e.name == "priceProductNumber"){
            res.status(422).send(e.message)
        }else if(e.name == "priceProductInvalid"){
            res.status(422).send(e.message)  
        }else if(e.name == "idProductNotFound"){
            res.status(401).send(e.message)
        }else if(e.name == "NotFound"){
            res.status(404).send(e.message)
        }else {
            res.status(500).send(e.message)
        }
    }   
})

//exercício 7
app.delete("/produtos/:id", (req:Request, res:Response)=>{
    const id = Number(req.params.id)

    
    try{
        if(!id){
            const erro = new Error("É necessário informar o id do produto!")
            erro.name = "idProductNotFound"
            throw erro
           } 

           const produtoDeletado = produtos.find((produto)=>{
            return produto.id === id})
       
            
        if(!produtoDeletado){
            const erro = new Error("É necessário informar um id válido!")
            erro.name = "NotFound"
            throw erro
           } 

        const produtosFiltrados = produtos.filter((produto)=>{
        
            return produto.id !== id
          
      })
      res.status(200).send(produtosFiltrados)

    }catch(e: any){
        if(e.name == "idProductNotFound"){
            res.status(401).send(e.message)
        }else if(e.name == "NotFound"){
            res.status(404).send(e.message)
        }else {
            res.status(500).send(e.message)
        }
    } 
    
       
    
})


app.listen(3003, () => {
    console.log("Server is running in http://localhost:3003");
});