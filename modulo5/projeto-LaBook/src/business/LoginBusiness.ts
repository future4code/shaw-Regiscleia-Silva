import { compare } from "bcryptjs";
import { LoginData } from "../data/loginData";
import { UserData } from "../data/UserData";
import { IdGenerator } from "../services/generetorId";
import { Autheticator } from "../services/generetorToken";
import { Compare, HashManege } from "../services/hash";
import { loginDTO } from "../types/loginDTO";

export class LoginBusiness {
  constructor(
    private loginData : LoginData,
    private hashManege: HashManege,
    private authenticator: Autheticator,
    private genereitorId: IdGenerator
  ) {}

  login = async (input: loginDTO) => {
    const { email, password } = input;

    if (!email || !password) {
      throw new Error("preenchimento obrigatorio");
    }
    const hashPassword = await this.hashManege.hash(password);
    const userDB = this.loginData.findByPassword( password);

    const compareResult = await compare(password,(await userDB).password);

    if (!compareResult) {
      throw new Error("Invalid password");
    }
    const id = this.genereitorId.generate();

    if (!id) {
      throw new Error("id invalido");
    }
    const token = this.authenticator.generate({ id });
  };
}
