import axios from "axios";
import { useState } from "react";
import { baseUrl } from "./constantes";
import {
  CircularProgress,
  CircularProgressLabel,
  Flex,
} from "@chakra-ui/react";

export const Progresso = () => {
  const [usuarios, setUsuarios] = useState([]);

  const listaDeUsuarios = () => {
    axios
      .get(`${baseUrl}/user/search`)
      .then((Response) => {
        setUsuarios(Response.data);

        alert("usuario cadastrado");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return <div></div>;
};
