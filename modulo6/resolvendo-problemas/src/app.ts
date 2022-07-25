// esse código + essa importação para criar o servidor:
// por performance, é bom o servidor ser o último trecho de código do documento


import { AddressInfo } from "net";
import {app} from "../src/index"

const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
       const address = server.address() as AddressInfo;
       console.log(`Server is running in http://localhost: ${address.port}`);
    } else {
       console.error(`Failure upon starting server.`);
    }
});