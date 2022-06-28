import { Request, Response } from "express";
import { UserDatabase } from "../data/UserDatabase";
import { generateToken } from "../services/generateToken";
import { compare } from "../services/hash";

export default async function login(req: Request, res: Response) {
  try {
    const { email, password } = req.body;

    //Criando instacia e pegando os dados de usuario
    const userDB = new UserDatabase();
    const user = await userDB.getByEmail(email);

    if (!user) {
      throw new Error("Email ou senha incorreta");
    }

    if (user.password != password) {
      throw new Error("Email ou senha incorreta");
    }

    const compareResult = await compare(password, user.password);

    if (!compareResult) {
      throw new Error("Invalid password");
    }

    const token = generateToken({ id: user.id, role: user.role });
    res.send({ token });
  } catch (error: any) {
    res.send({ message: error.message });
  }
}
