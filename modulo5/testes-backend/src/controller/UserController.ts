import { Request, Response } from "express";
import { UserBusiness } from "../business/UserBusiness";

import { signupDTO } from "../types/signupDTO"

export class UserController {

  constructor(private userBusiness: UserBusiness) {}

  signup = async (req: Request, res: Response) => {
    const { name, email, password } = req.body;
    const input: signupDTO = {
      name,
      email,
      password,
    };
    try {
      const token = await this.userBusiness.signup(input);
      res.send(this.signup).status(200);
      res.send({access_token: token}).status(200);
    } catch (error: any) {
      res.send({ message: error.message }).status(404);
    }
  };
}