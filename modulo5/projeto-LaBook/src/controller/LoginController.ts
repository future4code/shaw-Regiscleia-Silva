import { Request, Response } from "express";
import { loginDTO } from "../types/loginDTO";
import { UserController } from "./UserController";
import { LoginBusiness } from "../business/LoginBusiness";

export class LoginController {
constructor(
    private loginBusiness: LoginBusiness
){}
login = async (req: Request, res: Response)=> {
    const { email, password } = req.body; 

    const input:loginDTO = {
        email,
        password
    }
   
    try {
      const token = await this.loginBusiness.login(input)
      res.send(this.login).status(200)
    }catch(error:any){
res.status(404).send({message: error.message})
    }
}
}