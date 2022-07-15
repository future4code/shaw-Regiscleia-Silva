import { loginDTO } from "../types/loginDTO";

import { LoginBusiness } from "../business/LoginBusiness";
import { Request, Response } from "express";

export class LoginController {
  constructor(private loginBusiness: LoginBusiness) {}
  login = async (req: Request, res: Response) => {
    const { email, password } = req.body;

    const input: loginDTO = {
      email,
      password,
    };

    try {
      const token = await this.loginBusiness.login(input);
      res.send({ access_token: token }).status(200);
    } catch (error: any) {
      res.status(404).send({ message: error.message });
    }
  };
}
