import * as jwt from "jsonwebtoken";

  const expiresIn = "50min";
  const generateToken(input: AuthenticationData):string=>{
    const token = jwt.sign(
      {
        id: input.id,
      },
      process.env.JWT_KEY as string,
      {
        expiresIn
      }
    );
    return token;
  }


type AuthenticationData = {
  id: string;
}