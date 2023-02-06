import { CustomError } from "./CustomError";

export class InvalidEmail extends CustomError {
    constructor() {
        super(400, "Email Inválido")
    }
}


export class InvalidPassword extends CustomError {
    constructor() {
        super(400, "Password needs to be at least 6 characteres.")
    }
}