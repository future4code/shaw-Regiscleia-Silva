import { Request, Response } from "express";

import { UserBusiness } from "../business/userBusiness";
import { Users } from "../entidades/User";

export async function  signup (req: Request, res: Response){

    const {email, name, password, role} = req.body;
        const userBusiness = new UserBusiness();
        try {
            const user = new Users("",
                email,
                name,
                password,
					role
            )

            const token = await userBusiness.createUsers(user);

            res.status(200).send({ token });

        } catch (error:any) {
            res.status(400).send({ error: error.message });
        }

       
    }