import {app} from "../controller/app";
import { UserBusiness } from "../business/useBusiness";
import { UserController } from "./UserController";
import { HashManege } from "../services/hash";
import { Autheticator } from "../services/generetorToken";
import { UserData } from "../data/UserData";
import { IdGenerator } from "../services/generetorId";
import { LoginBusiness } from "../business/LoginBusiness";
import { LoginData } from "../data/loginData";
import { LoginController } from "./LoginController";


const useBusiness = new UserBusiness(
    new UserData(),
    new IdGenerator(),
    new HashManege(),
    new Autheticator()

)
const userController = new UserController(
useBusiness
)
const loginBusiness = new LoginBusiness(
   new LoginData(),
    new  HashManege(),
   new  Autheticator(),
    new IdGenerator()
)
const loginController = new LoginController(
    loginBusiness
)


app.post("./signup", userController.signup)
app.post ("/login", loginController.login)