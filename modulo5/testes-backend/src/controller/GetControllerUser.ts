import { Request, Response } from "express";
import {GetBusinessUser}from "../business/GetBusinessUser";


export class GetControllerUser {
  constructor(private getBusinessUser: GetBusinessUser) {}


    getUser = async (req:Request ,res:Response ) =>{
        const id = req.params.id


    }
} 
 