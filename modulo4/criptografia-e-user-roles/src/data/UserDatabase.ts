import { BaseDatabase } from "./BaseDatabase";
import { user } from "../types/user";

export class UserDatabase extends BaseDatabase {
  public createUser = async (
    id: string,
    email: string,
    password: string,
    role: string
  ) => {
    await this.getConnection()
      .insert({
        id,
        email,
        password,
        role,
      })
      .into("User");
  };

  public getByEmail = async (email: string): Promise<user> => {
    const [result] = await this.getConnection()("User").where({ email });
    return result;
  };
}
