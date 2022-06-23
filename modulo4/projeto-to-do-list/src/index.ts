import Express from "express";
import cors from "cors";
import connection from "./connection";
import app from "./app";

const erroCode = 404;

export const conn = {
  host: process.env.DB_HOST,
  port: 3306,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_SCHEMA,
};

const createUser = async (
  id: string,
  name: string,
  nickname: string,
  email: string
): Promise<any> => {
  console.log(conn);
  const resultado = await connection
    .insert({
      id: id,
      name: name,
      nickname: nickname,
      email: email,
    })
    .into("users");
  return resultado;
};

app.post("/user", async (req, res) => {
  try {
    const resultado = await createUser(
      generateId(),
      req.body.name,
      req.body.nickname,
      req.body.email
    );
    if (!req.body.name || !req.body.nickname || !req.body.email) {
      throw new Error("preenchimento obrigatorio");
    }

    res.status(200).send(resultado);
  } catch (erroCode: any) {
    res.status(400).send({ message: erroCode.message });
  }
});

const generateId = () => {
  var result = "";
  var characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  var charactersLength = characters.length;
  for (var i = 0; i < 20; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
};

// exercicio 2

const getUserById = async (id: string): Promise<any> => {
  const resultado = await connection.raw(
    ` select * from users where id = '${id}' 
    `
  );

  return resultado[0][0];
};

app.get("/user/:id", async (req, res) => {
  try {
    const id = req.params.id;
    console.log(id);
    const usuario = await getUserById(id);
    if (!usuario) {
      throw new Error("usuario não encontrado");
    }
    res.send(usuario).status(200);
  } catch (erroCode: any) {
    res.status(400).send({ message: erroCode.message });
  }
});

//3
const editUser = async (
  id: string,
  name: string,
  nickname: string
): Promise<any> => {
  console.log(id, name, nickname);
  await connection("users")
    .update({
      name: name,
      nickname: nickname,
    })
    .where("id", id);
};

app.put("/user/edit/:id", async (req, res) => {
  try {
    await editUser(req.params.id, req.body.name, req.body.nickname);

    if (req.body.name === "" || req.body.nickname === "") {
      throw new Error("preenchimento obrigatorio");
    }
    res.status(200).send({ message: "sucess" });
  } catch (erroCode: any) {
    res.status(400).send({ message: erroCode.message });
  }
});

//4

const createTask = async (
  id: string,
  titulo: string,
  descricao: string,
  data_limite: Date,
  id_usuario: string
): Promise<any> => {
  console.log(data_limite);
  await connection
    .insert({
      id: id,
      titulo: titulo,
      descricao: descricao,
      data_limite: data_limite,
      id_usuario: id_usuario,
    })
    .into("tarefas");
};

app.post("/task", async (req, res) => {
  try {
    const { data_limite } = req.body;
    const split = data_limite.split("/");
    const dia = split[0];
    const mes = split[1];
    const ano = split[2];

    if (
      !req.body.titulo ||
      !req.body.descricao ||
      !req.body.data_limite ||
      !req.body.id_usuario
    ) {
      throw new Error("preenchimento obrigatorio");
    }
    await createTask(
      generateId(),
      req.body.titulo,
      req.body.descricao,
      new Date(`${ano}/${mes}/${dia}`),
      req.body.id_usuario
    );

    res.status(200).send({ message: "sucess" });
  } catch (erroCode: any) {
    res.status(400).send({
      message: erroCode.message,
    });
  }
});

//5

const getTaskById = async (id: string): Promise<any> => {
  const resultado = await connection.raw(
    ` select t.id as idTarefa, t.titulo, t.descricao, t.data_limite,
      t.status, u.id as id_usuario, u.nickname as apelido
        from users u
        inner join tarefas t on u.id = t.id_usuario
      where t.id = '${id}' 
      `
  );

  return resultado[0][0];
};

app.get("/task/:id", async (req, res) => {
  try {
    const id = req.params.id;
    console.log(id);
    const tarefa = await getTaskById(id);
    if (!tarefa) {
      throw new Error("tarefa não encontrado");
    }
    res.send(tarefa).status(200);
  } catch (erroCode: any) {
    res.status(400).send({ message: erroCode.message });
  }
});
