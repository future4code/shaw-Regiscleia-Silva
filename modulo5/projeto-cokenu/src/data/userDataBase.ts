import { User } from "../entidades/User";
import { BaseDataBase } from "./BaseDataBase";

export class UserDataBase extends BaseDataBase {
  public async newUser(user: User): Promise<void> {
    try {
      await BaseDataBase.connection("CreateUsers").insert({
        id: user.getId(),
        name: user.getname(),
        email: user.getEmail(),
        password: user.getPassword(),
      });
    } catch (error: any) {
      throw new Error(error.sqlMessage || error.message);
    }
  }

  public async uniqueEmail(email: string): Promise<User> {
    try {
      const user = await BaseDataBase.connection("CreateUsers")
        .select("*")
        .where({ email });
      return user[0] && User.userModel(user[0]);
    } catch (error: any) {
      throw new Error(error.sqlMessage || error.message);
    }
  }
}
