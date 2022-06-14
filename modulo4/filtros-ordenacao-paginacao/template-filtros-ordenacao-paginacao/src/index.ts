import { app } from "./app";
import { getAllRecipes } from "./endpoints/getAllRecipes";
import { getAllUsers } from "./endpoints/todos";

app.get("/users", getAllUsers);
app.get("/users/:type", getAllUsers);
