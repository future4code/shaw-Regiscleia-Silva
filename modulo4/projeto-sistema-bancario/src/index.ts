import express from "express";
import cors from "cors";

type users = {
  nome: string;
  cpf: string;
  nascimento: string;
  saldo: number;
  extrato: dadosExtrato[];
};
type dadosExtrato = {
  valor: number;
  data: string;
  descricao: string;
};

const arrayUsers: users[] = [
  {
    nome: "marcelo",
    cpf: "221625631478",
    nascimento: "09/04/1992",
    saldo: 0,
    extrato: [
      {
        valor: 20.99,
        data: "22/05/2022",
        descricao: "açougue",
      },
    ],
  },
  {
    nome: "pantera",
    cpf: "6985435631478",
    nascimento: "13/08/2019",
    saldo: 0,
    extrato: [
      {
        valor: 200.99,
        data: "08/05/2022",
        descricao: "cobasi",
      },
    ],
  },
  {
    nome: "charlie",
    cpf: "221625635864",
    nascimento: "09/04/2021",
    saldo: 0,
    extrato: [
      {
        valor: 90.99,
        data: "03/05/2022",
        descricao: "cobasi",
      },
    ],
  },
];
let statusCode = 401;
const app = express();
app.use(express.json());
app.use(cors());

// todos usuarios
app.get("/users", (req, res) => {
  res.send(arrayUsers);
});

//pegar saldo

app.get("/users/saldo", (req, res) => {
  try {
    const name: string = req.query.name as string;
    const cpf: string = req.query.cpf as string;

    if (!name || !cpf) {
      statusCode = 400;
      throw new Error("nome ou cpf não informados");
    }

    const buscarSaldo = arrayUsers.find((user) => {
      return user.nome === name && user.cpf === cpf;
    });

    if (!buscarSaldo) {
      statusCode = 404;
      throw new Error("Usuario não encontrado");
    }

    res.status(201).send({ saldo: buscarSaldo.saldo });
  } catch (error: any) {
    res.status(statusCode).send({ message: error.message });
  }
});

// Adicionar saldo
app.put("/user/addSaldo", (req, res) => {
  try {
    const { nome, cpf, saldo } = req.body;

    // Validar se campos estão preenchidos

    const alterar: any = arrayUsers.map((user) => {
      if (user.nome === nome && user.cpf === cpf) {
        user.saldo = user.saldo + saldo;
      }
      return user;
    });

    res.status(201).send(alterar);
  } catch (error: any) {
    res.status(statusCode).send({ message: error.message });
  }
});

// criar Conta
app.post("/users", (req, res) => {
  try {
    const { nome, cpf, nascimento, saldo, extrato, valor, data, descricao } =
      req.body;
    const dataAtual = new Date();
    const [dia, mes, ano] = nascimento.split("/");

    const idade = dataAtual.getFullYear() - Number(ano);
    const novoUsuario = {
      nome,
      cpf,
      nascimento,
      saldo,
      extrato,
      valor,
      data,
      descricao,
    };
    if (idade < 18) {
      throw new Error("menor que 18 anos");
    }

    arrayUsers.push(novoUsuario);
    res.send(arrayUsers).status(201);
  } catch (error: any) {
    res.status(statusCode).send({ message: error.message });
  }
});

app.listen(3003, () => {
  console.log("server ir running por 3003");
});
