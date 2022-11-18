import  express, { Request, Response} from 'express'
import connection from './dataBase/connection'

import cors from 'cors'

const app = express()

app.use(express.json())
app.use(cors())

//Exercício 1

//a) Ao utilizar o raw, ele retorna todas as informações que são geradas pelo MYSQL.
//b)
app.get('/actor', async(req:Request, res:Response):Promise<void> => {
    const nome = req.query.nome
    let result

    try{
        result = await connection.raw(
            `
            SELECT * FROM Actor WHERE nome = '${nome}'
            `
        )

        res.status(200).send(result[0])
    }catch(e:any){
        console.log(e.message);
    }
});

//c)
app.get('/actor/gender', async(req:Request, res:Response):Promise<void> => {
    const gender = req.query.gender;
    let result

    try{
        result = await connection.raw(
            `
            SELECT COUNT(*) FROM Actor WHERE gender = '${gender}'
            `
        )

        res.status(200).send(result[0][0])
    }catch(e:any){
        console.log(e.message);
    }
})

//Exercício 2

//a)
app.patch('/actor/salary/:id', async(req:Request, res:Response):Promise<void> => {
    const id = req.params.id
    const salary = req.body.salary
    

    try{

        await connection("Actor").update(
            {
            salary: salary
            }
        ).where({
            id: id
        })

        res.status(200).send("Salário alterado com êxito!")

    }catch(e:any){
        console.log(e.message);
    }
})

//b)

app.delete('/actor', async(req:Request, res:Response):Promise<void> => {
    const id = req.params.id;
    
    try{

        await connection.raw(
            `
            SET foreign_key_checks =0;
            ` 
        )

        await connection("Actor").delete().where({id: id})

        await connection.raw(
            `
            SET foreign_key_checks =0;
            ` 
        )

        res.status(200).send("Ator Deletado com êxito!")

    }catch(e:any){
        console.log(e.message);
    }
})

//c)
app.get('/actor/avg', async(req:Request, res:Response):Promise<void> => {
    const gender = req.params.gender
    let result  

    try{

        result = await connection("Actor").avg(     
            "salary as average"
            ).where({
            gender: gender
        })

        res.status(200).send(result)

    }catch(e:any){
        console.log(e.message);
    }
})

//Exercício 3

//a)
app.get("/actor/:id", async (req: Request, res: Response): Promise<void> => {
    const id = req.params.id
    let result

    try {
       
        result = await connection("Actor").where ( 
            {
                id: id
            } )

        res.status(200).send(result)

    } catch (e:any) {
        console.log(e.message);
    }
})

//b)
app.get("/actor", async (req: Request, res: Response): Promise<void> => {
    const gender = req.query.gender as string
    let result

    try {
        
        result = await connection("Actor")
        .count("*")
        .where( 
            {
                gender: gender
            })

        res.status(200).send(result)

    } catch (e:any) {
        console.log(e.message);
    }

})

//Exercício 4

//a)
app.patch('/actor/salary/:id', async(req:Request, res:Response):Promise<void> => {
    const id = req.params.id
    const salary = req.body.salary
    

    try{

        await connection("Actor").update(
            {
            salary: salary
            }
        ).where({
            id: id
        })

        res.status(200).send("Salário alterado com êxito!")

    }catch(e:any){
        console.log(e.message);
    }
})

//b)
app.delete('/actor', async(req:Request, res:Response):Promise<void> => {
    const id = req.params.id;
    
    try{

        await connection.raw(
            `
            SET foreign_key_checks =0;
            ` 
        )

        await connection("Actor").delete().where({id: id})

        await connection.raw(
            `
            SET foreign_key_checks =0;
            ` 
        )

        res.status(200).send("Ator Deletado com êxito!")

    }catch(e:any){
        console.log(e.message);
    }
})





// -------------------PORTA PARA VERIFICAR O SERVIDOR-------------

app.listen(3003,()=>{
    console.log('Servidor executando na porta 3003')
})