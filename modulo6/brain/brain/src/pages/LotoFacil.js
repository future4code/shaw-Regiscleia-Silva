import React, { useContext, useEffect, useState } from "react";

import { Select, Text, Box, Flex, Image, Grid, Stack } from "@chakra-ui/react";
import { useNavigate } from "react-router";

import ContextLoterias from "../global/GlobalContext";
import trevo from "../imagens/trevo.png";
import { Headers } from "./Headers";
import moment from "moment";

moment.locale("pt-br");

export const LotoFacil = () => {
  const navigate = useNavigate();

  const { concurso, jogosLotericos, getConcursos, getConcursoData } =
    useContext(ContextLoterias);

  useEffect(() => {
    getConcursoData("2200");
  }, []);

  return (
    <Flex
      direction={{ base: "column", md: "row" }}
      h={"100vh"}
      w={"100vw"}
    >
      <Flex
        bg="#DD7AC6"
        direction={"column"}
        justify={"space-between"}
        align={"center"}
        p={10}
        minW={"500px"}
      >
        {/* <Box m={"10px"}> */}
        <Headers />
        {/* </Box> */}
        <Flex alignSelf={"flex-start"}>
          <Image w={"35px"} h={"35px"} src={trevo}></Image>
          <Text
            // mt={"400px"}
            // m={"auto"}
            // ml={"100px"}
            fontSize={"30px"}
            fontWeight={700}
            color={"white"}
            fontFamily={" Montserrat"}
          >
            LotoFacil
          </Text>
        </Flex>

        <Box color={"white"}>
          {/* <Text fontFamily={" Montserrat"} align={"center"} mt={"280px"}> */}
          <Text>Concurso</Text>
          <Text fontWeight={"bold"}>
            {concurso.id} - {moment(concurso.data).format("L")}
          </Text>
          {/* </Text> */}
        </Box>
      </Flex>

      <Flex
        p={5}
        bg="lightgray"
        pos={"relative"}
        justify="center"
        align="center"
        h={"100vh"}
        w={"100vw"}
      >
        <Box as="div" className="corner"></Box>

        <Flex flexWrap={'wrap'} zIndex={5}>
          {concurso.numeros.map((numero) => {
            return (
              <Flex
                // mb={"95px"}
                bg={"white"}
                ml={"10px"}
                mb={"10px"}
                h={"50px"}
                w={"50px"}
                justify={"center"}
                align={"center"}
                borderRadius={"50%"}
                key={numero.id}
                fontWeight="bold"
              >
                {numero}
              </Flex>
            );
          })}
        </Flex>
      </Flex>
    </Flex>
  );
};