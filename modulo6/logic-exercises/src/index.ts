// dentro do index.ts, fazer importações e ativar o Express e Cors.

import express, {Express} from 'express'
import cors from 'cors'

const app: Express = express();

app.use(express.json());
app.use(cors());
// esse código + essa importação para criar o servidor:
// por performance, é bom o servidor ser o último trecho de código do documento


import { AddressInfo } from "net";

const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
       const address = server.address() as AddressInfo;
       console.log(`Server is running in http://localhost: ${address.port}`);
    } else {
       console.error(`Failure upon starting server.`);
    }
});

