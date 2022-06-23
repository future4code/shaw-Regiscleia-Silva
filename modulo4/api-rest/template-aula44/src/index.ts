import express from "express";
import cors from "cors";

enum UserType {
  ADMIN = "ADMIN",
  NORMAL = "NORMAL",
}

type User = {
  id: number;
  name: string;
  email: string;
  type: UserType;
  age: number;
};

// Mock simulando um array de usuários no Banco de Dados
let users: User[] = [
  {
    id: 1,
    name: "Alice",
    email: "alice@email.com",
    type: UserType.ADMIN,
    age: 12,
  },
  {
    id: 2,
    name: "Bob",
    email: "bob@email.com",
    type: UserType.NORMAL,
    age: 36,
  },
  {
    id: 3,
    name: "Coragem",
    email: "coragem@email.com",
    type: UserType.NORMAL,
    age: 21,
  },
  {
    id: 4,
    name: "Dory",
    email: "dory@email.com",
    type: UserType.NORMAL,
    age: 17,
  },
  {
    id: 5,
    name: "Elsa",
    email: "elsa@email.com",
    type: UserType.NORMAL,
    age: 17,
  },
  {
    id: 6,
    name: "Fred",
    email: "fred@email.com",
    type: UserType.ADMIN,
    age: 60,
  },
];

const app = express();
app.use(express.json());
app.use(cors());
let erroCode: number = 401;

// Para testar se o servidor está tratando os endpoints corretamente
app.get("/ping", (req, res) => {
  res.status(200).send("pong!");
});
//1 a- GET
//b- params

//2a- passei atraves da variavel que a usa como um tipo e que temos array de usuarios.
// b - atraves do Enum, que limita a resposta e de uma condição se o type do query é igual do enum

//3a- query

app.get("/users", (req, res) => {
  const name: string = req.query.name as string;
  const type = req.query.type as UserType;

  //2a- passei atraves da variavel que a usa como um tipo e que temo array de usuarios.
  // b - atraves do Enum, que limita a resposta
  try {
    if (name) {
      const user = users.find((user) => {
        return user.name === name;
      });
      if (!user) {
        erroCode = 404;
        throw new Error("User not found");
      }
      res.send(user).status(201);
    }

    if (type) {
      if (!(type === UserType.ADMIN || type === UserType.NORMAL)) {
        erroCode = 400;
        throw new Error("tipo invalido");
      }

      const usuarios = users.filter((user: any) => {
        return user.type === type;
      });

      res.send(usuarios).status(201);
    }

    res.status(404).send();
  } catch (error: any) {
    res.status(erroCode).send({ message: error.message });
  }
});
//4a- cria mais um item e se quiser alterar os campos, ele cria outro item com o campo alterado
// b- não, porque cria itens repetidos 

app.put("/user", (req, res) => {
  try {
    const { id, name, email, type, age } = req.body;
    const novo = {
      id,
      name,
      email,
      type,
      age,
    };

    users.push(novo);
    res.send(users).status(201);
  } catch (error: any) {
    res.send(400);
  }
});

app.listen(3003, () => {
  console.log("Server is running at port 3003");
});
