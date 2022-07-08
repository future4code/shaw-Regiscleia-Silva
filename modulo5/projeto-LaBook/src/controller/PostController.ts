import { Request, Response } from "express";
import { PostDTO } from "../types/postDTO";
import {PostBusiness} from "../business/PostBusiness"

export class PostController{
    constructor(
        private postBusiness:PostBusiness
    ){}

    post = async (req:Request, res:Response) =>{
        const {photo, description, date_create,role}= req.body

        const input: PostDTO = {
            photo,
            description,
            date_create,
            role
        }
        try {
            const token =await this.postBusiness.post(input)
            res.send(this.post).status(200)
            
        } catch (error:any) {
            res.send({message:error.message}).status(404)
        }
    }
}