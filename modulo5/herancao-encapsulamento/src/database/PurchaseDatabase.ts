import { PurchaseDB } from "../models/Purchase";
import { BaseDatabase } from "./BaseDatabase";


export class PurchaseDatabase extends BaseDatabase{
    protected static TABLE_PURCHASES = "Labe_Purchases"

    public getAllPurchase =  async() =>{
        const result = await BaseDatabase.connection(PurchaseDatabase.TABLE_PURCHASES).select()
        return result
    }

    public createPurchase = async(id: string, user_id: string, product_id: string, quantity: number, total_price: number) => {
        const newPurchase: PurchaseDB = {id,user_id,product_id,quantity,total_price}
        await BaseDatabase.connection(PurchaseDatabase.TABLE_PURCHASES).insert(newPurchase)
    }
}