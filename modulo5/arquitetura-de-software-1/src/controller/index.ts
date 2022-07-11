import { UserBusiness } from "../business/userBusiness"
import {app} from "../controller/app"
import { signup} from "./signup"

app.post("/signup",  signup)