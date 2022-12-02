import {Request, Response} from "express";
import getAddressInfo from "../services/getAddressInfo";

export default async function testeAddress(req: Request, res: Response){
    const {cep} = req.body;

    if(!cep){
        res.statusCode = 422;
        throw new Error("cep é obrigatório");
        
    }

    const result = await getAddressInfo(cep)

    res.status(201).send(result)

}