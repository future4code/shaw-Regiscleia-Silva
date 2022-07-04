import { BaseDataBase } from "./baseDataBase"
import {roles} from "../entidades/User"


export class UserDatabase extends BaseDataBase {
    
      public async createUser(
        id: string,
        email: string,
        name: string,
        password: string,
        role: roles
      ): Promise<void> {
        try {
          await BaseDataBase.connection()
            .insert({
              id,
              email,
              name,
              password,
              role
            })
            .into("");
        } catch (error:any) {
          throw new Error(error.sqlMessage || error.message);
        }
      }
}

