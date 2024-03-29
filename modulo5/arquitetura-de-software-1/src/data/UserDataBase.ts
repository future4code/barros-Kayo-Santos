import { user } from "../types/user";
import { BaseDatabase } from "./BaseDataBase";

export class UserDataBase extends BaseDatabase {
    
  createUser = async (user:user): Promise <void> => {  
        
   try {
      await  UserDataBase.connection.insert({
          id: user.id,
          email: user.email,
          name: user.name,
          password: user.password
        })
        .into("User_Arq");
    } catch (error:any) {
      throw new Error(error.sqlMessage || error.message);
    }
  }}
    
