import { Post } from "../model/Post";
import { BaseDataBase } from "./BaseDataBase";

export class searchPostData extends BaseDataBase{
    protected table_name = "Post"

    select = async(id:string)=>{
        try{
          const paramsResult=   await this
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