import { Request, Response } from "express";
import { connection } from "../data/connection";
import getAddressInfo from "../services/getAddressInfo";
import transporter from "../services/mailTransporter";
import { user } from "../types";
import dotenv from 'dotenv'
dotenv.config()

export default async function createUser(
   req: Request,
   res: Response
): Promise<void> {
   try {

      const { nome, cep, numero, complemento } = req.body

      if (!nome || !cep || !numero) {
         res.statusCode = 422
         throw "'nome', 'cep', 'numero' e 'complemento' são obrigatórios"
      }

      const address = await getAddressInfo(cep)

      const newUser:user = {
            nome: nome,
            cep: cep,
            logradouro: address.logradouro,
            numero: numero,
            complemento: complemento,
            bairro: address.bairro,
            cidade: address.cidade,
            estado: address.estado
      }

      console.log(newUser);
      

      await connection('exercico_servico_back').insert(newUser)
      
      const send = await transporter.sendMail({
         from: process.env.NODEMAILER_USER,
         to: "projetos_jbl-aaaaiax6fosqmlb2s7ipkez3d4@labenualunos.slack.com",
         subject: "Conta Criada",
         text: "[BARROS - Kayo Céshar]",
         html: "objeto {from: process.env.NODEMAILER_USER, to: projetos_jbl-aaaaiax6fosqmlb2s7ipkez3d4@labenualunos.slack.com,subject: Conta Criada,text: [BARROS - Kayo Céshar],html:}"
      })

      console.log(send);
      
      res.status(201).send("Usuário criado!")

   } catch (error:any) {

      if (typeof error === "string") {

         res.send(error)
      } else {
         
         console.log(error.sqlMessage || error.message);
         res.status(500).send("Ops! Um erro inesperado ocorreu =/")
      }

   }
}