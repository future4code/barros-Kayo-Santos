import { Request, Response } from "express"
import { connection } from "../data/connection"




export async function searchUserByName(
   req: Request,
   res: Response  
): Promise<void> {
   let errorCode = 400;
   let name = req.query.name as string;

   try{
      if(!name){
         name = "%"
      }
      

      const result = await connection("aula48_exercicio")
      .where("name", "like", `%${name}%`)

      if(result.length < 1){
         errorCode = 404
         throw new Error("Usuário não encontrado");
      }



      res.status(200).send(result);

   }catch(e:any){
      res.status(errorCode).send(e.message)
   }

}