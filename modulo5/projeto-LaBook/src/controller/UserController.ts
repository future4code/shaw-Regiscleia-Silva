import { Request, Response } from "express";

export class UserController{
    signup =async (req:Request, res:Response) => {
      const {name, email, password}=req.body

    }
}
