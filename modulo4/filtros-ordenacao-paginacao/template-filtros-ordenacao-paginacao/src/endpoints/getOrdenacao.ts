import {connection} from "../data/connection";

let statusCode = 400
 async function selectAllUsers(order:string):Promise<any> {
    const result = await connection.raw(`
       SELECT id, name, email, type
       FROM aula48_exercicio order by ${order} asc;
    `)
 
    return result[0]
 }
 const getAllUsers = async(req:any, res:any): Promise<void> =>{
    try { 
        const order = req.params.order
       const users = await selectAllUsers(!order?"email": order)
 
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

 