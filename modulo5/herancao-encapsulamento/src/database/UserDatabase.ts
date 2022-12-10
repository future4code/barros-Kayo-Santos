import { BaseDatabase } from "./BaseDatabase";
import { TUser } from "../models/User";

export class UserDatabase extends BaseDatabase{
protected static TABLE_USERS = "Labe_Users"

    public getAllUsers =  async() =>{
        const result = await BaseDatabase.connection(UserDatabase.TABLE_USERS).select()
        return result
    }

    public createUser = async(id: string, email: string, password: string) => {
        const newUser:TUser = {id,email,password}
        await BaseDatabase.connection(UserDatabase.TABLE_USERS).insert(newUser)
    }

    public getUserById = async (id: string) => {
        const result = await BaseDatabase.connection(UserDatabase.TABLE_USERS).select().where({id: id})
        return result
    }
}