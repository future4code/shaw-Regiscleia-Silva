import axios from "axios";
import UseForm from "./Hooks/UseForm";

import {
  Grid,
  GridItem,
  Box,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Button,
  HStack,
} from "@chakra-ui/react";

import { baseUrl } from "./constantes";
import { useEffect } from "react";

/* useEffect(() => {
  ()
}, []); */


export const Headers = () => {
  const [form, onChange, clear] = UseForm({
    name: "",
    lastName: "",
    participation: "",
  });

  const onClickCadastrar = () => {
    axios
      .post(`${baseUrl}/user/signup`, form)
      .then((Response) => {
        clear();
        alert("usuario cadastrado");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <HStack w={"100%"} h={"150px"} bg={"blue.500"}>
        <FormControl m={"150px"} isRequired>
          <Input
            bg={"white"}
            h={"50px"}
            m={"5px"}
            w={"250px"}
            placeholder="Fist name"
            name="name"
            type={"text"}
            value={form.name}
            onChange={onChange}
            pattern={"^ . {5,}$"}
            border={""}
          />

          <Input
            m={"5px"}
            h={"50px"}
            bg={"white"}
            w={"250px"}
            placeholder="Last name"
            name="lastName"
            type={"text"}
            value={form.lastName}
            onChange={onChange}
            pattern={"^ . {3,}$"}
          />
          <Input
            m={"5px"}
            bg={"white"}
            h={"50px"}
            w={"250px"}
            placeholder="Participation"
            name="participation"
            type={"text"}
            value={form.participation}
            onChange={onChange}
            pattern={"^ . {2,}$"}
          />
          <Button
            onClick={onClickCadastrar}
            bg={"blue.500"}
            border={"1px"}
            alignSelf={"center"}
            color={"white"}
            fontSize={"25px"}
            h={"50px"}
            w={"150px"}
          >
            SEND
          </Button>
        </FormControl>
      </HStack>
    </div>
  );
};
