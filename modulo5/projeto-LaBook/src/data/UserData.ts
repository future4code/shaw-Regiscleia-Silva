import { User } from "../model/Users";
import { findByEmail } from "../types/findByemail";
import { BaseDataBase } from "./BaseDataBase";

export class UserData extends BaseDataBase {
  protected Table_name = "CreateUsers";

  insert = async (user: User) => {
    try {
      await this.connection(this.Table_name).insert(user);
    } catch (error: any) {
      throw new Error("");
    }
  };
  findByEmail = async (email: string) => {
    try {
      const queryResult: findByEmail[] = await this.connection(this.Table_name)
        .select()
        .where({ email });
      return queryResult[0];
    } catch (error: any) {
      throw new Error(error.sqlMessage || error.message);
    }
  };
}
