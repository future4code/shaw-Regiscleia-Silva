// dentro do index.ts, fazer importações e ativar o Express e Cors.

import express, {Express} from 'express'
import cors from 'cors'

export const app: Express = express();

app.use(express.json());
app.use(cors());

// a função express() inicia a aplicação web com express
// os .use() ativam os módulos de Bodyparser e Cors