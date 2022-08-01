import { Request, Response } from "express";
import { SignupBusiness } from "../Business/SignupBusiness";
import { signup } from "../Entidades/signup";

import { SignupDTO } from "../Entidades/signupDTO";

export class SignupController {
  async signup(req: Request, res: Response) {
    try {
      const { name, lastName, participation } = req.body;
      if (!name || !lastName || !participation) {
     throw new Error("campos Obrigatorios");
      }
      if(typeof name !== 'string') 
            {
                throw new Error("Campo 'name' apenas letras")
            }
      const input: SignupDTO = {
        name: req.body.name,
        lastName: req.body.lastName,
        participation: req.body.participation,
      };

      const signupBusiness = new SignupBusiness();
      await signupBusiness.newSignup(input);
     
      res.status(200).send({ sucess: true });


    } catch (error:any) {
      res.status(400).send({ err: error.message });
    }
  }


search = async(req:Request, res:Response)=>{
    const searchName = req.query.name as string
    try{
        if(!searchName){
            throw new Error("Escreva o nome do usuario")

        }
        const business = new SignupBusiness()
        const result = await business.search(searchName)
        res.status(200).send({result})

    }catch(error:any){
res.status(400).send({error:error.message})
    }
}
}