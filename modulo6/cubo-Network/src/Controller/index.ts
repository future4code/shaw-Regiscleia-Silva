import dotenv from "dotenv";
import {AddressInfo} from "net";
import express from "express";
import cors from "cors"
import { SignupRouter } from "../Routes/SignupRouter";


dotenv.config();
const app = express();
app.use(cors()); 
app.use(express.json());

app.use("/user", SignupRouter);
app.use("/user", SignupRouter)


const server = app.listen(  3003, () => {
    if (server) {
      const address = server.address() as AddressInfo;
      console.log(`Servidor rodando em http://localhost:${address.port}`);
    } else {
      console.error(`Falha ao rodar o servidor.`);
    }
  })