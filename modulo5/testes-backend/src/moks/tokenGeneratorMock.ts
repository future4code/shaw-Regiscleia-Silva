import { Role } from "../model/User_Arq";

export class TokenGeneratorMocks {

  public generate = (): string => {
    return "TOKEN_QUALQUER";
  };

  public verify() {
    const objeto = {
      id: "id_mock",
      role: Role.normal
    }
    return objeto;
  }
}