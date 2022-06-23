import { connection } from "../data/connection";
import express from "express";
import cors from "cors"


let statusCode = 400
async function selectAllUsers(
  name: string,
  type: string,
  order: string,
  pagina: number
): Promise<any> {
  let where = "";
  if (name) {
    where += `where name = '${name}'` + (type ? `and type = '${type}'` : "");
  } else if (type) {
    where += `where type = '${type}'`;
  }
  const page = !pagina ? 1 : pagina;
  const offset = 5 * (page - 1);

  const query = `
  SELECT id, name, email, type
  FROM aula48_exercicio    
    ${where}
    order by ${order} desc
    limit 5 offset ${offset}
`;

  console.log(query);

  const result = await connection.raw(query);

  return result[0];
}
export const getAllUsers= async (
  req:any,
  res:any
): Promise<void> => {
  try {
    const tipo = req.params.type;
    const name = req.query.name;
    const order = !req.query.order ? "name" : req.query.order;
    const pagina: number = req.query.pagina as number;
    const users = await selectAllUsers(name, tipo, order, pagina);

    if (!users.length) {
      res.statusCode = 404;
      throw new Error("No users found");
    }

    res.status(200).send(users);
  } catch (error: any) {
    console.log(error);
    res.send(error.message || error.sqlMessage);
  }
};
