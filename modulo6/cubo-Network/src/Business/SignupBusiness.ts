import { SignupDataBase } from "../Data/SignupDataBase";
import { SignupDTO } from "../Entidades/signupDTO";
import { IdGenerator } from "../Services/IdGenerator";

export class SignupBusiness {
  async newSignup(signup: SignupDTO) {
    const idGenerator = new IdGenerator();
    const signupDataBase = new SignupDataBase();
    const id = idGenerator.generateId();

    await signupDataBase.createSignup(
      id,
      signup.name,
      signup.lastName,
      signup.participation 
    );
  }
  public search = async () => {
    const searchNameData = new SignupDataBase();
    const result = await searchNameData.searchName();
    return result;
  };
}
