import { signupDTO } from "../types/signupDTO";
import { UserData } from "../data/UserData";
import { HashManager, hashManager } from "../services/hashManager";
import {  IdGenerator } from "../services/idGenerator";
import { AuthenticationData } from "../services/authenticator";

export class UserBusiness {
  constructor(
    private userData: UserData,
    private genereitorId : IdGenerator,
    private hashManage : HashManager
  ) {}

  signup = async (input: signupDTO) => {

    const { name, email, password } = input;

    if (!name || !email || !password) {
 
    const registeredUser = await this.userData.findByEmail(email);
    if (registeredUser) {
      throw new Error("email ja existente");
    }
    const id = this.genereitorId.generate();

    if (!id) {
      throw new Error("id incorreto");
    }

    const hashPassword = await this.hashManage.hash(password);

    const user = new User(id, name, email, hashPassword);
    await this.userData.insert(user);
}
  }
}