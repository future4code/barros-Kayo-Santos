import { Request, Response } from "express"
import { TABLE_USERS } from "../database/tableNames"
import { UserDatabase } from "../database/UserDatabase"

export const getUsers = async (req: Request, res: Response) => {
    let errorCode = 400
    try {
        const userBD = new UserDatabase()

        const result = await userBD.getAllUsers()

        res.status(200).send({ users: result })
    } catch (error) {
        res.status(errorCode).send({ message: error.message })
    }
}