import { compare } from "bcryptjs";
import { LoginData } from "../data/LoginData";
import { UserData } from "../data/UserData";
import { IdGenerator } from "../services/generetorId";
import { Autheticator } from "../services/generetorToken";
import { Compare, HashManege } from "../services/hash";
import { loginDTO } from "../types/loginDTO";

export class LoginBusiness {
  constructor(
    private loginData: LoginData,
    private hashManege: HashManege,
    private authenticator: Autheticator,
    private genereitorId: IdGenerator
  ) {}

  login = async (input: loginDTO) => {
    const { email, password } = input;

    if (!email || !password) {
      throw new Error("preenchimento obrigatorio");
    }

    const userDB = await this.loginData.findByEmail(email);

    if (!userDB) {
      throw new Error("User not found");
    }

    const hashPassword = await this.hashManege.hash(password);

    const compareResult = await compare(password, userDB.password);

    if (!compareResult) {
      throw new Error("Invalid password");
    }
    const id = this.genereitorId.generate();

    if (!id) {
      throw new Error("id invalido");
    }
    const token = this.authenticator.generate({ id });
    return token;
  };
}
