import { Request, Response } from "express"
import { connection } from "../data/connection"




export async function orderUser(
   req: Request,
   res: Response  
): Promise<void> {
   let errorCode = 400;
   let sort = req.query.sort as string;
   let order = req.query.order as string;

   try{
      
      if(order && order.toUpperCase() !== "ASC" && order.toUpperCase() !== "DESC"){
         order = "ASC"
      } 
      
      if(!sort){
         sort = "email"
      }

      if (sort !== "name" && sort !== "type") {
         sort = "email"
     }

      const result = await connection("aula48_exercicio")
      .orderBy(sort,order)

      console.log(result);
      
    
      res.status(200).send(result);

   }catch(e:any){
      res.status(errorCode).send(e.message)
   }

}