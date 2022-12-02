import { Request, Response } from "express"
import { connection } from "../data/connection"




export async function searchUserByType(
   req: Request,
   res: Response  
): Promise<void> {
   let errorCode = 400;
   let type = req.params.type as string;

   try{
      if(type === ":type"){
         type = "%"
      }
      
      
      const result = await connection("aula48_exercicio")
      .where("type", "like", `%${type}%`)

      if(result.length < 1){
         errorCode = 404
         throw new Error("Usuário não encontrado");
      }

      
      

      res.status(200).send(result);

   }catch(e:any){
      res.status(errorCode).send(e.message)
   }

}