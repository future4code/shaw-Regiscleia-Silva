import getAddressInfo from "../endpoints/getAddressInfo";
import { Request, Response } from "express";

const addAddress = async (req: Request, res: Response) => {
  const { number, complement }: any = req.body;
  const cep = req.params.cep;
  const address = await getAddressInfo(cep);
  res.status(201).send(address);
};

export default addAddress;
