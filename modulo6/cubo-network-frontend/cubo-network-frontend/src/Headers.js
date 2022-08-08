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
  HStack
} from "@chakra-ui/react";

import { baseUrl } from "./constantes";

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
        
      {/*  <Grid templateColumns="repeat(4, 1fr)" gap={2}>
        <FormControl isRequired>
          <GridItem w="100%" h="20" bg="blue.500"/>
           <Input
           
            w={"15em"}
            placeholder="Fist name"
            name="name"
            type={"text"}
            value={form.name}
            onChange={onChange}
            pattern={"^ . {5,}$"}
            border={""}
          />  
          
          

          <GridItem w="100%" h="20" bg="blue.500" />
          
          <Input
            w={"15em"}
            placeholder="Last name"
            name="LastName"
            type={"text"}
            value={form.LastName}
            onChange={onChange}
            pattern={"^ . {3,}$"}
          />

          <GridItem w="100%" h="20" bg="blue.500" />
         
          <Input
            w={"15em"}
            placeholder="Participation"
            name="Participation"
            type={"text"}
            value={form.participation}
            onChange={onChange}
            pattern={"^ . {2,}$"}
          />
          <GridItem w="100%" h="20" bg="blue.500" />
          <Button>send</Button>
        </FormControl>
      </Grid> */}
 



      <HStack w={"100%"} h={"150px"} bg ={"blue.500"}>
      <FormControl m={"150px"} isRequired>
      <Input
      bg={"white"}
     m={"5px"}
           w={"15em"}
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
      bg={"white"}
            w={"15em"}
            placeholder="Last name"
            name="LastName"
            type={"text"}
            value={form.LastName}
            onChange={onChange}
            pattern={"^ . {3,}$"}
          />
          <Input
           m={"5px"}
          bg={"white"}
            w={"15em"}
            placeholder="Participation"
            name="Participation"
            type={"text"}
            value={form.participation}
            onChange={onChange}
            pattern={"^ . {2,}$"}
          />
           <Button>send</Button>
          </FormControl>
      </HStack>
    </div>
  );
};


