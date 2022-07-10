import { app } from "../controller/app";
import { UserBusiness } from "../business/UseBusiness";
import { UserController } from "./UserController";
import { HashManege } from "../services/hash";
import { Autheticator } from "../services/generetorToken";
import { UserData } from "../data/UserData";
import { IdGenerator } from "../services/generetorId";
import { LoginBusiness } from "../business/LoginBusiness";
import { LoginData } from "../data/LoginData";
import { LoginController } from "./LoginController";
import { PostController } from "./PostController";
import { PostBusiness } from "../business/PostBusiness";
import { PostData } from "../data/PostData";
import { SearchPostController } from "./SearchPostController";
import { SearchPostBusiness } from "../business/SearchPostBusiness";
import { searchPostData } from "../data/SearchPostData";

const useBusiness = new UserBusiness(
  new UserData(),
  new IdGenerator(),
  new HashManege(),
  new Autheticator()
);
const userController = new UserController(useBusiness);
const loginBusiness = new LoginBusiness(
  new LoginData(),
  new HashManege(),
  new Autheticator(),
  new IdGenerator()
);
const loginController = new LoginController(loginBusiness);

const postBusiness = new PostBusiness(new IdGenerator(), new PostData());
const postController = new PostController(postBusiness);

const searchPostBusiness = new SearchPostBusiness(new searchPostData());

app.post("/signup", userController.signup);
app.post("/login", loginController.login);
app.post("/post", postController.post);
app.get("/post/:id", postController.search);
