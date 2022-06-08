import express, { Express } from "express";
import knex from "knex";
import cors from "cors";
import dotenv from "dotenv";
import connection from "../connection";
import app from "./app";

const erroCode = 400;
// exercicio 1
//a-) ao usar raw retorna as informaçoes exatamente igual que esta na query,
//então se queremos um valor especifico colocamos o index desta informação.

//b-)
const getActorById = async (id: string): Promise<any> => {
  const result = await connection.raw(`
      SELECT * FROM Actor WHERE id = '${id}'
    `);

  return result[0][0];
};

const buscarPorName = async (name: string): Promise<any> => {
  const result = await connection.raw(`
      SELECT * FROM Actor WHERE name = '${name}'
    `);

  return result[0][0];
};
(async () => {
  console.log(await buscarPorName("Moacyr Franco"));
})();

// c -)

const quantidadeAtores = async (gender: string): Promise<any> => {
  const resultado = await connection.raw(
    `select count(*) as count from Actor where gender = "${gender}"`
  );
  const quantidade = resultado[0][0].count;
  return quantidade;
};

(async () => {
  console.log(await quantidadeAtores("female"));
})();

//exercicio 2
//a-)
const alteraSalario = async (id: string, salary: number): Promise<any> => {
  await connection("Actor")
    .update({
      salary: salary,
    })
    .where("id", id);
};

(async () => {
  console.log(await alteraSalario("003", 200000));
})();

//b-)
const deletarAtor = async (id: string): Promise<void> => {
  await connection("Actor").delete().where("id", id);
};
(async () => {
  console.log(await deletarAtor("003"));
})();

//c-)
const recebeGenero = async (gender: string): Promise<any> => {
  const resultado = await connection("Actor")
    .avg("salary as average")
    .where({ gender });

  return resultado[0].average;
};
(async () => {
  console.log(await recebeGenero("male"));
})();

//exercicio 3

app.get("/actor/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const ator = await getActorById(id);

    res.status(200).send(ator);
  } catch (erroCode: any) {
    res.status(404).send({ message: erroCode.message });
  }
});
// b-)
app.get("/actor", async (req, res) => {
  try {
    const genero = req.query.gender as string;
    const selecionar = await quantidadeAtores(genero);

    res.send({ result: selecionar }).status(200);
  } catch (erroCode: any) {
    res.status(400).send({ message: erroCode.message });
  }
});

// exercicio 4

app.put("/actor", async (req, res) => {
  try {
    await alteraSalario(req.body.id, req.body.salary);

    res.status(201).send({alteraSalario});
  } catch (erroCode: any) {
    res.status(400).send({ message: erroCode.message });
  }
});

//b-) 
app.delete("/actor/:id", async(req, res)=>{
    try{
        const id = req.params.id
        const deletar  = await deletarAtor(id)
        res.send({result:deletar}).status(200)


    }catch(erroCode:any){
        res.status(400).send({message: erroCode.message})
    }
})
