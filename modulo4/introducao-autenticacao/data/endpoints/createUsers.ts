import { Request, Response } from "express";
import {createUser} from "../dataCreateUser"




export default async function createUserDb(
    req: Request,
    res: Response
 ): Promise<any> {
    try {
 
       const {id, email, password } = req.body
    
       if ( !id || !email || !password) {
          res.statusCode = 422
          throw new Error("")
       }
 
       const userDB = new createUser();
       const user = await userDB.generateId
 
       if (user) {
          res.statusCode = 409
          throw new Error('Email já cadastrado')
       }
    }catch
}