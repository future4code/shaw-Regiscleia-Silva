import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { BaseUrl } from "../constantes";
import {
  Select,
  Text,
  Stack,
  MenuButton,
  Menu,
  MenuList,
  MenuItem,
  Button,
  Box,
  Flex,
} from "@chakra-ui/react";
import { useNavigate } from "react-router";
import {
  goDiaDeSorte,
  golotoFacil,
  goLotoMania,
  goMega,
  goQuina,
  goTime,
} from "../routes/codineitor";
import ContextLoterias from "../global/GlobalContext";

export const MegaSena = () => {
  const navigate = useNavigate();

  const { concurso, jogosLotericos, getConcursos } =
    useContext(ContextLoterias);

  useEffect(() => {}, []);

  return (
    <div>
      <Flex  justify={"space-around"}>
        <Box  p="15%" bg="#6BEFA3">
          <Menu flexDirection={"column"}>
            {({ loterias }) => (
              <>
                <MenuButton   isActive={loterias} as={Button}>
                  {loterias ? "Close" : "Loterias"}
                </MenuButton>
                <MenuList>
                  <MenuItem onClick={() => goMega(navigate)}>MegaSena</MenuItem>
                  <MenuItem onClick={() => goQuina(navigate)}>Quina</MenuItem>
                  <MenuItem onClick={() => goTime(navigate)}>
                    TimeMania
                  </MenuItem>
                  <MenuItem onClick={() => goLotoMania(navigate)}>
                    LotoMania
                  </MenuItem>
                  <MenuItem onClick={() => golotoFacil(navigate)}>
                    LotoFacil
                  </MenuItem>
                  <MenuItem onClick={() => goDiaDeSorte(navigate)}>
                    Dia de Sorte
                  </MenuItem>
                </MenuList>
              </>
            )}
          </Menu>

          <Text>MegaSena</Text>
          <Text>{concurso.data}</Text>
        </Box>

        <Box p="15%" bg="green.50">
          <Stack direction="column">
            <Box
              display={"-webkit-inline-box"}
              justifyContent="center"
              align="center"
              py={12}
              
            >
              {concurso.numeros.map((numero) => {
                return (
                  <Box
                mb={'100px'}
                  bg={"white"}
                  ml ={"10px"}
                  p={"20px"}
                  border={"1px solid black"}
                  borderRadius={"50%"}
                 
                  key={numero.id}
                  >
                    {numero}
                  </Box>
                );
              })}
            </Box>
          </Stack>
        </Box>
      </Flex>
    </div>
  );
};
