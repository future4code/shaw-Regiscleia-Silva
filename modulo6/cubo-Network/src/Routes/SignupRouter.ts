import  express  from "express"
import { SignupController,} from "../Controller/SignupController"

export const SignupRouter = express.Router()

const signupController = new SignupController()

SignupRouter.post('/signup', signupController.signup);
SignupRouter.get('/search', signupController.search)