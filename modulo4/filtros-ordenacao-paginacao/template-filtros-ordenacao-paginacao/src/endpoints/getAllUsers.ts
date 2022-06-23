import {Express, request, response}  from "express";
import { connection } from "../data/connection";

export default async function selectAllUsers():Promise<any> {
    const result = await connection.raw(`
       SELECT id, name, email, type
       FROM aula48_exercicio;
    `)
 
    return result[0]
 }

 // busca po nome
let statusCode = 400
export const getAllUsers = async(req:any, res:any): Promise<void> =>{
    try {
    const name = req.query.name

       const users = await selectAllUsers()
 
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
 
 // busca por tipo

 export const getUserByType = async(req: any,res: any): Promise<void> =>{
    try {
        const tipo = req.params.tipo
       const users = await selectAllUsers()
 
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