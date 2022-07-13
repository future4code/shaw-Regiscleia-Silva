import { User } from "../model/User_Arq";
import { BaseDataBase } from "./BaseDataBase";

export class GetDataUser extends BaseDataBase{
    protected table_name = "User_Arq"

    select = async(id:string)=>{
        try{
          const paramsResult = await this
            .connection(this.table_name)
            .select()
            .where({id})
            return paramsResult[0]
    }
        catch(error:any){
            throw new Error("");
        }

} 
}