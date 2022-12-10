import { Request, Response } from "express"
import { User } from "../models/User"
import { UserDatabase } from "../database/UserDatabase"


export const createUser = async (req: Request, res: Response) => {
    let errorCode = 400
    try {
        const email = req.body.email
        const password = req.body.password

        if (!email || !password) {
            throw new Error("Body inválido.")
        }

       
        const newUser = new User(Date.now().toString(),email,password)
        const userBD = new UserDatabase()

        userBD.createUser(newUser.getId(), newUser.getEmail(), newUser.getPassword())
        
        res.status(201).send({ message: "Usuário criado", user: newUser })
    } catch (error) {
        res.status(errorCode).send({ message: error.message })
    }
}