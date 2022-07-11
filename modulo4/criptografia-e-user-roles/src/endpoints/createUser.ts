import { Request, Response } from "express";
import { UserDatabase } from "../data/UserDatabase";
import { generateToken } from "../services/generateToken";
import { generateId } from "../services/generateId";
import { user } from "../types/user";
import { hash } from "../services/hash";
import { resolve } from "path";

export default async function createUser(
  req: Request,
  res: Response
): Promise<void> {
  try {
    const { email, password, role } = req.body;

    if (!email || !password) {
      res.statusCode = 422;
      throw new Error("Preencha os campos 'password' e 'email'");
    }

    const userDB = new UserDatabase();

    const id: string = generateId();

    // criptografia
    const hashPassword = await hash(password as string);

    await userDB.createUser(id, email, hashPassword, role);

    const token = generateToken({ id, role: role });

    res.status(201).send({ token });
  } catch (error: any) {
    console.log(error);
    if (res.statusCode === 200) {
      res.status(500).send({ message: "Internal server error" });
    } else {
      res.send({ message: error.message });
    }
  }
}
