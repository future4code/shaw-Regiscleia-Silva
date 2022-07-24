import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { api_key, BaseURL } from "./constantes";
import axios from "axios";
import { useParams } from "react-router-dom";
import {
  Text,
  Image,
  Box,
  Flex,
  HStack,
  Grid,
  GridItem,
} from "@chakra-ui/react";
import { moment } from "moment";

export const Detalhes = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const [detalhes, setDetalhes] = useState([]);
  const [genres, setGenres] = useState([]);

  const [cast, setCast] = useState([]);
  const [crew, setCrew] = useState([]);

  const [recomenda, setRecomenda] = useState([]);
  const [trailer, setTrailer] = useState([]);

  useEffect(() => {
    trailers();
    detalharFilmes();
    detalharCreditos();
    recomendacao();
  }, []);

  const detalharFilmes = () => {
    axios
      .get(`${BaseURL}/movie/${id}?api_key=${api_key}&language=pt-BR`)
      .then((response) => {
        setDetalhes(response.data);
        setGenres(response.data.genres);

        console.log(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const detalharCreditos = () => {
    axios
      .get(`${BaseURL}/movie/${id}/credits?api_key=${api_key}&language=pt-BR`)
      .then((response) => {
        setCast(response.data.cast);
        setCrew(response.data.crew);
        console.log(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const recomendacao = () => {
    axios
      .get(
        `${BaseURL}/movie/${id}/recommendations?api_key=${api_key}&language=pt-BR`
      )
      .then((response) => {
        setRecomenda(response.data.results);
        console.log(response.data.results);
      });
  };
  const trailers = () => {
    axios
      .get(`${BaseURL}/movie/${id}/videos?api_key=${api_key}&language=pt-BR`)
      .then((response) => {
        setTrailer(response.data.results);
        console.log(response.data.results);
      });
  };

  return (
    <div>
      <Grid
        templateAreas={`"header header"
                    "nav main"
                    "nav footer"`}
        gridTemplateRows={"80px 1fr 100px"}
        gridTemplateColumns={"500px 1fr"}
        h={"650px"}
        // gap="1"
        fontWeight="bold"
      >
        <GridItem
          align={"center"}
          color="white"
          fontFamily={"Roboto"}
          fontSize={"28px"}
          pl="2"
          bg="#2D0C5E"
          area={"header"}
        >
          {detalhes.original_title}
          <br />
          {detalhes.release_date} {genres.map((genre) => genre.name).join(", ")}
        </GridItem>
        <GridItem pl="2" bg="#2D0C5E" area={"nav"}>
          <Image
            mt="80px"
            ml={"50px"}
            boxSize={"90%"}
            boxShadow={" inset 0 0 1em gray, 0 0 1em black;"}
            src={`https://image.tmdb.org/t/p/w500/${detalhes.poster_path}`}
          ></Image>
        </GridItem>
        <GridItem
          justify={"center"}
          pl="2"
          bg="#2D0C5E"
          color="white"
          area={"main"}
        >
          <Text mt="70px">
            {" "}
            SINOPSE <br />
          </Text>
          <Text fontWeight={"none"} mt="20px">
            {detalhes.overview}
          </Text>
          {crew.slice(0, 5).map((cw) => {
            return (
              <Box
                m={"15px"}
                display={"-webkit-inline-box"}
                mt={"90px"}
                color="white"
              
              >
                {cw.name}
                <br />
                {cw.known_for_department}
              </Box>
            );
          })}
        </GridItem>
        <GridItem pl="2" bg="#2D0C5E" color="white" area={"footer"}></GridItem>
      </Grid>
     
      <Text color="white">{detalhes.popularity}</Text>
       
      <Text
        fontWeight={"bold"}
        m="20px"
        mt="50px"
        fontFamily="Roboto"
        fontSize="28px"
      >
        {" "}
        Elenco Principal
      </Text>
      <Flex overflow={"scroll"}>
        {cast.map((ct) => {
          return (
            <Flex justify={"space-around"} direction={"row"}>
              <Box
                boxShadow={" inset 0 0 1em gray, 0 0 1em black;"}
                bg={"#EBF8FF"}
                h={"200px"}
                w={"130px"}
                borderWidth="1px "
                mt={"5px"}
                margin={"10px"}
              >
                <Box>
                  <Image
                    boxSize={"130px"}
                    src={`https://image.tmdb.org/t/p/w500/${ct.profile_path}`}
                  ></Image>
                </Box>
                <Box>
                  <Text align="center">{ct.name}</Text>
                  <Text align="center">{ct.character}</Text>
                </Box>
              </Box>
            </Flex>
          );
        })}
      </Flex>
      <Text
        fontWeight={"bold"}
        m="20px"
        mt="50px"
        fontFamily="Roboto"
        fontSize="28px"
      >
        Trailer
      </Text>
      {trailer.slice(0, 1).map((video) => {
        return (
          <Box m="50px">
            <iframe
              width="560"
              height="315"
              src={`https://www.youtube.com/embed/${video.key}?hl=${video.iso_3166_1}`}
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </Box>
        );
      })}
      <Text
        fontWeight={"bold"}
        m="20px"
        mt="50px"
        fontFamily="Roboto"
        fontSize="28px"
      >
        Recomendações
      </Text>
      <Flex display={"flex"} flexDirection={"row"}>
        {recomenda.slice(0, 6).map((recomendar) => {
          return (
            <Box m="30px">
              <Image
                boxSize={"150px"}
                boxShadow={" inset 0 0 1em black, 0 0 1em black;"}
                src={`https://image.tmdb.org/t/p/w500/${recomendar.poster_path}`}
              ></Image>
              <Box align="center">
                <Text>{recomendar.title}</Text>
                <Text>{recomendar.release_date}</Text>
              </Box>
            </Box>
          );
        })}
      </Flex>
      ;
    </div>
  );
};
