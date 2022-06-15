import axios from "axios";
import { Request, Response } from "express";
import { fullAddress } from "./types/fullAddress";

const getAddressInfo = async (cep: string) => {
  try {
    const response: any = await axios.get(
      `https://viacep.com.br/ws/${cep}/json`
    );

    const endereco: fullAddress = {
      cep: response.data.cep,
      logradouro: response.data.logradouro,
      bairro: response.data.bairro,
      cidade: response.data.cidade,
      estado: response.data.estado,
    };

    return endereco;
  } catch (error: any) {
    console.log(error);
  }
};

export default getAddressInfo;
