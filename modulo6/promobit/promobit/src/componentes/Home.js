import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { BaseURL, api_key } from "./constantes";
import { Text, Flex,Box,Image } from "@chakra-ui/react";

export const Home = () => {
  const navigate = useNavigate();

  const [filmes, setFilmes] = useState([]);

  useEffect(() => {
    Lista();
  }, []);

  const Lista = () => {
    axios
      .get(`${BaseURL}/movie/popular?api_key=${api_key}`)
      .then((response) => {
        setFilmes(response.data.results);
        console.log(response.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <Text>Milhões de filmes,séries e pessoas para descobrir.Explore já</Text>
      <Flex justify={"space-around"} direction={"row"} wrap={"wrap"}>
        {filmes.map((filme)=>{
            return (
               <Box
               maxW="sm"
               key={filme.id}
               borderWidth="1px"
               borderRadius="lg"
               margin={"5px"}
               >
                <Box>
                    <Image
                    boxSize={"150px"}
                    src={`https://image.tmdb.org/t/p/w500/${filme.poster_path}`}/>                    
                </Box>
               </Box> 
            )
        })}
      </Flex>
    </div>
  );
};
