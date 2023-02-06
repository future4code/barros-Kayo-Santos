import { UserDatabase } from "../data/UserDatabase";
import { CustomError, InvalidEmail, InvalidName, InvalidPassword, UserNotFound } from "../error/customError";
import {
  UserInputDTO,
  user,
  EditUserInputDTO,
  EditUserInput,
  LoginInputDTO,
} from "../model/user";
import { Authenticator } from "../services/authenticator";
import { IdGenerator } from "../services/idGenerator";


const idGenerator = new IdGenerator()

export class UserBusiness {
  public signup = async (input: UserInputDTO) => {
    try {
      const { name, nickname, email, password } = input;

      if (!name || !nickname || !email || !password) {
        throw new CustomError(
          400,
          'Preencha os campos "name","nickname", "email" e "password"'
        );
      }

      if (name.length < 4) {
        throw new InvalidName();
      }

      if (!email.includes("@")) {
        throw new InvalidEmail();
      }

      
      const id = idGenerator.generateId()
      const authenticator = new Authenticator()

      const user: user = {
        id,
        name,
        nickname,
        email,
        password,
      };
      const userDatabase = new UserDatabase();
      await userDatabase.insertUser(user);

      const token = authenticator.generateToken({id})
      return token

    } catch (error: any) {
      throw new CustomError(400, error.message);
    }
  };

  public login = async (input: LoginInputDTO) => {
    try {
      const {email, password } = input;

      if ( !email || !password) {
        throw new CustomError(
          400,
          'Preencha os campos "email" e "password"'
        );
      }

      if (!email.includes("@")) {
        throw new InvalidEmail();
      }

      const authenticator = new Authenticator()  
      const userDatabase = new UserDatabase();
      const user = await userDatabase.findUserByEmail(email);

      if(!user){
        throw new UserNotFound();
      }

      if(user.password !== password){
        throw new InvalidPassword();
      }


      const token = authenticator.generateToken({id:user.id})
      return token

    } catch (error: any) {
      throw new CustomError(400, error.message);
    }
  };

  public editUser = async (input: EditUserInputDTO) => {
    try {
      const { name, nickname, token } = input;

      if (!name || !nickname || !token) {
        throw new CustomError(
          400,
          'Preencha os campos "token", "name" e "nickname"'
        );
      }

      if (name.length < 4) {
        throw new InvalidName();
      }
      const authenticator = new Authenticator() 
      const {id} = authenticator.getTokenData(token)

      const editUserInput: EditUserInput = {
        id,
        name,
        nickname,
      };

      const userDatabase = new UserDatabase();
      await userDatabase.editUser(editUserInput);
    } catch (error: any) {
      throw new CustomError(400, error.message);
    }
  };
}
