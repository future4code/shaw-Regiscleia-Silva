import {connection} from "../data/connection";
import {Request, Response} from "express"


 async function selectAllUsers(pagina:number):Promise<any> {
    const result = await connection.raw(`
       SELECT id, name, email, type
       FROM aula48_exercicio limit 5 offset ${pagina * 5} asc;
    `)
 
    return result[0]
 }let statusCode = 400
 const getAllUsers = async(req: any,res: any): Promise<void> =>{
    try { 
        const pagina = req.query.pagina 
       const users = await selectAllUsers(pagina)
 
       if(!users.length){
          res.statusCode = 404
          throw new Error("No recipes found")
       }
 
       res.status(200).send(users)
       
    } catch (error:any) {
       console.log(error)
       res.send(error.message || error.sqlMessage)
    }
 }