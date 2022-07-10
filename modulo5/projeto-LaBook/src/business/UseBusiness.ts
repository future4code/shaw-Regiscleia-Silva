import { signupDTO } from "../types/signupDTO";
import { IdGenerator } from "../services/generetorId";

import { HashManege } from "../services/hash";
import { User } from "../model/Users";
import { UserData } from "../data/UserData";
import { Autheticator } from "../services/generetorToken";

export class UserBusiness {
  constructor(
    private userData: UserData,
    private genereitorId: IdGenerator,
    private hashManege: HashManege,

    private authenticator: Autheticator
  ) {}
  signup = async (input: signupDTO) => {
    
    const { name, email, password } = input;

    if (!name || !email || !password) {
      throw new Error("preenchimento obrigatorio");
    }

    const registeredUser = await this.userData.findByEmail(email);
    if (registeredUser) {
      throw new Error("email ja existente");
    }
    const id = this.genereitorId.generate();

    if (!id) {
      throw new Error("id incorreto");
    }

    const hashPassword = await this.hashManege.hash(password);

    const user = new User(id, name, email, hashPassword);
    await this.userData.insert(user);
    const token = this.authenticator.generate({ id });

    return token;
  };
}
