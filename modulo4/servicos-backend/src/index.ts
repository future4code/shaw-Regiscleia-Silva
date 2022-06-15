

import { AddressInfo } from "net";
import app from "./app";
import getEndereco from "./endpoints/getEndereco";
import getRefatorado from "./endpoints/getRefatorado";
import addAddress from "./endpoints/addAddress";


app.get("/user/:cep", getEndereco)

app.get("/usersCompleto/:cep", getRefatorado)

app.post("/address/:cep", addAddress)


const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
       const address = server.address() as AddressInfo;
       console.log(`Server is running in http://localhost:${address.port}`);
    } else {
       console.error(`Failure upon starting server.`);
    }
});