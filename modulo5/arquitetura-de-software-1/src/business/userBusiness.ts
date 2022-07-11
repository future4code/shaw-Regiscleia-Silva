import {UserDatabase}from "../data/userDataBase";
import {IdGenerator} from "../services/generetorId";
import { HashManege } from "../services/hash";
import {Autheticator} from "../services/generetorToken"
import { Users } from "../entidades/User";


export class UserBusiness {

public async createUsers(user: Users) {

        try{
            const userDatabase = new UserDatabase();
            if(!user.getname() || !user.getEmail() || !user.getPassword() || !user.getRole()){
                throw new Error("Please fill all the fields");
            }

            if(user.getPassword().length < 6){
                throw new Error("Password must have at least 6 characters");
            }

            const generator = new IdGenerator();
            const id = generator.generate()

            const hashManege = new HashManege();
            const hashPassword = await hashManege.hash(user.getPassword() as string);

            await userDatabase.createUser(id, user.getEmail(), user.getname(), hashPassword, user.getRole());
            
            const role = user.getRole();
            const authetication = new Autheticator();
    const token: string = authetication.generate({id , role});
            return token;

        }catch(error: any){
            throw new Error( error.message || "Error creating user. Please check your system administrator.");
        }
    }

}