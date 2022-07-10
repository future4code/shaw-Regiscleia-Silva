import { findByEmail } from "../types/findByemail";
import { BaseDataBase } from "./BaseDataBase";

export class LoginData extends BaseDataBase {
  protected Table_name = "CreateUsers";

  findByEmail = async (email: string) => {
    try {
      const queryResult: findByEmail[] = await this.connection(this.Table_name)
        .select()
        .where({email});
      return queryResult[0];
    } catch (error: any) {
      throw new Error(error.message);
    }
  };
}
