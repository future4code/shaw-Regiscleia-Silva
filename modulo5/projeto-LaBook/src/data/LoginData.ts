import { findByEmail } from "../types/findByemail"
import { BaseDataBase } from "./BaseDataBase"

export class LoginData extends BaseDataBase{
    protected Table_name = "CreateUsers"

    findByPassword = async(password:string)=>{
        try{
            const queryResult : findByEmail[] =await 
            this.connection(this.Table_name)
            .select()
            .where(password)
            return queryResult[0]
        }catch(error:any){
            throw new Error(error.message);
            
        }
    }
}