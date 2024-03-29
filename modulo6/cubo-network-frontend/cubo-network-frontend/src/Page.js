import {
  Table,
  Tfoot,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
 
} from "@chakra-ui/table";
import { Grid, GridItem, Box, Flex,  Text, } from "@chakra-ui/react";
import axios from "axios";
import { useRef, useState, useEffect } from "react";
import { baseUrl } from "./constantes";
import { VictoryBar, VictoryPie } from "victory";
import { Headers } from "./Headers";

export const Page = () => {
  // const chartComponentRef = useRef<HighchartsReact.RefObject>(null);

  const [usuarios, setUsuarios] = useState([]);
  const [dadosGraficos, setDadosGraficos] = useState([]);

  useEffect(() => {
    listaDeUsuarios();
  }, []);

  const listaDeUsuarios = () => {
    axios
      .get(`${baseUrl}/user/search`)
      .then((Response) => {
        setUsuarios(Response.data.result);
        const dadosGraficos = Response.data.result.map((data) => {
          return {
            x: data.name,
            y: data.participation,
          };
        });
        setDadosGraficos(dadosGraficos);
        console.log(Response);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const updateList = ()=> {
    listaDeUsuarios();
  };

  return (
    <div>
        <Headers onSaveAction={updateList}/>
        <Text mt={"10px"} fontWeight={"bold"} align={"center"} fontSize={"40px"} >Dados</Text>
    <Flex mt={"70px"}>
        
      <TableContainer  m={"40px"} border={"1px"} overflowY ={"none"} overflowX h={"50%"} w={"50%"}>
        <Table h={"10px"} w={"10px"} variant="striped" colorScheme="teal">
          <Thead>
            <Tr>
              <Th>ordem</Th>
              <Th>name</Th>
              <Th>lastName</Th>
              <Th isNumeric>participation</Th>
            </Tr>
          </Thead>
          <Tbody  >
            {usuarios.map((usuario, index) => {
              return (
                <Tr  key={index}>
                  <Td >{index}</Td>
                  <Td>{usuario.name}</Td>

                  <Td>{usuario.lastName}</Td>

                  <Td isNumeric>{usuario.participation }%</Td>
                </Tr>
              );
            })}
          </Tbody>
        </Table>
      </TableContainer>
      <VictoryPie 
        padAngle={({ datum }) => datum.y}
      
        innerRadius={50}
        style={{ labels: { fontSize: 10, fontWeight: "bold" } }}
        colorScale={["green","blue", "gold", "red", "pink", "violet", "navy", "yellow", "gray", "tomato", "orange"]}
        origin={{ y: 130 }}
        padding={130}
        
        data={dadosGraficos}
      />
     
    </Flex>
    </div>
  );
};
