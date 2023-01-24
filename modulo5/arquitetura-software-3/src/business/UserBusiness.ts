import { UserDatabase } from "../data/UserDatabase"
import { UserInputDTO } from "../model/UserDTO"
import { User } from "../model/User"
import { generateId } from "../services/idGenerator"
import { InvalidEmail, InvalidPassword } from "../error/UserErros"

export class UserBusiness {
  async create({ email, name, password }: UserInputDTO):Promise<void> {
    if (!email || !name || !password) {
      throw new Error("Dados inválidos (email, name, password)")
    }

    if (!email.includes("@")) {
      throw new InvalidEmail()
    }

    if (password.length < 6) {
      throw new InvalidPassword()
    }
    
    
    const id = generateId()

    const userDatabase = new UserDatabase()
    await userDatabase.create({
      id,
      name,
      email,
      password
    })
  }

  async getAll(): Promise<User[]> {{
    const userDatabase = new UserDatabase()
    const result = await userDatabase.getAll()
    return result;
  }

}
