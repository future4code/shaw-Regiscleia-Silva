import axios from "axios";
import { Request, Response } from "express";
import { fullAddress } from "./types/fullAddress";

let erroCode = 400;

const getRefatorado = async (req: Request, res: Response) => {
  try {
    const cep = req.params.cep;
    const requisicao: any = await axios.get(`https://viacep.com.br/ws/${cep}/json`);

    console.log(requisicao.data)

    const endereco: fullAddress = {
      cep: requisicao.data.cep,
      logradouro: requisicao.data.logradouro,
      bairro: requisicao.data.bairro,
      cidade: requisicao.data.cidade,
      estado: requisicao.data.estado,
    };

    res.send(endereco).status(200);
  } catch (error: any) {
    res.status(400).send({ message: error });
  }
};

export default getRefatorado;
