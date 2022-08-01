import { BaseDataBase } from "./BaseDataBase";

export class SignupDataBase extends BaseDataBase {
  private static Table_name = "Signup";

  public async createSignup(
    id: string,
    name: string,
    lastName: string,
    participation: string
  ): Promise<void> {
    try {
      await this.getConnection()
        .insert({ id, name, lastName, participation })
        .into(SignupDataBase.Table_name);
    } catch (error: any) {
      throw new Error(error.sqlMessage || error.message);
    }
  }


  public async searchName(name:string){
    try {
      let response = await this.getConnection()
      .select('*')
      .from(SignupDataBase.Table_name)
      .where(`"${name}"`)
      return response; 
    } catch (error:any) {
      throw new Error(error.sqlMessage || error.message)
    }
  }
}
