import { Request, Response } from "express"
import { connection } from "../data/connection"

export async function getAllUsers(req: Request, res: Response): Promise<void> {
    let errorCode = 400
    let sort = req.query.sort as string;
    let order = req.query.order as string;
    let name = req.query.name as string;
    let type = req.params.type as string;
    let page = Number(req.query.page)

    try {

        if(order && order.toUpperCase() !== "ASC" && order.toUpperCase() !== "DESC"){
            order = "DESC"
        }
        if(!sort){
            sort = "name"
         }
   
         if (sort !== "name" && sort !== "type") {
            sort = "name"
        }
        
        if(!name){
            name = "%"
        }

        if(type === ":type"){
            type = "%"
        }

        if(isNaN(page)|| page < 1){
            page = 1
         }



        let offset = 5 * (page - 1)

        const result = await connection("aula48_exercicio")
        .where("name", "like", `%${name}%`)
        .where("type", "like", `%${type}%`)
        .orderBy(sort, order)
        .limit(5)
        .offset(offset)

        if (result.length < 1) {
            errorCode = 404
            throw new Error("Usuário não encontrado")
        }

        res.status(200).send(result)

    } catch (e:any) {
        res.status(errorCode).send(e.message)
    }
}