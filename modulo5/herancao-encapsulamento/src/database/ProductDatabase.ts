import { BaseDatabase } from "./BaseDatabase";
import { TProduct } from "../models/Product";

export class ProductDatabase extends BaseDatabase{
    protected static TABLE_PRODUCTS = "Labe_Products"

    public getAllProduct =  async() =>{
        const result = await BaseDatabase.connection(ProductDatabase.TABLE_PRODUCTS).select()
        return result
    }

    public createProduct = async(id: string, name: string, price: number) => {
        const newProduct:TProduct = {id,name,price}
        await BaseDatabase.connection(ProductDatabase.TABLE_PRODUCTS).insert(newProduct)
    } 

}