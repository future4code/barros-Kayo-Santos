import express from "express";

import { UserController } from "../controller/UserController";

export const userRouter = express.Router()

const userController = new UserController()

userRouter.post('/signup', userController.signup)
userRouter.put('/edit',userController.editUser )
userRouter.put('/login',userController.login)
