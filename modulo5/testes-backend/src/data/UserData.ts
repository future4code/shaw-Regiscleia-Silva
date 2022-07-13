import { User } from "../model/User_Arq";
import { BaseDataBase } from "../data/BaseDataBase";
import { findByEmail } from "../types/findByEmail";



export class UserData extends BaseDataBase {
  protected Table_name = "User_Arq";

    insert =  async(user:User)=>{
        try {
            await this
            .connection(this.Table_name)
            .insert(user)
        }catch(error:any){
        throw new Error("");
        }
    }
        findByEmail = async(email:string)=>{
        try{
           const queryResult:findByEmail[] = await  this
           .connection(this.Table_name)
           .select()
           .where({email})
           return queryResult[0]
        }catch(error:any){
           throw new error (error)

        }
  };
  
  };

