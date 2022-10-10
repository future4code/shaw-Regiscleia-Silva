import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { BaseURL, api_key } from "./constantes";
import {
  Text,
  Flex,
  Box,
  Image,
  ButtonGroup,
  Button,
  Container,
  Stack,
  CircularProgress,
} from "@chakra-ui/react";
import { detalhes, gotToDetalhes } from "./codineitor";
import moment from "moment";
import styled from "styled-components";

/*  const Button = styled.button`
&.active{
    background = "red"
}
` */

moment.locale("pt-br");

export const Home = () => {
  const navigate = useNavigate();

  const [filmes, setFilmes] = useState([]);
  const [filtrar, setFiltrar] = useState([]);

  const [genres, setGenres] = useState([]);
  const [selectedGenres, setSelectedGenres] = useState([]);

  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);

  useEffect(() => {
    Lista();
    getGenres();
  }, [page]);

  const getGenres = () => {
    axios
      .get(`${BaseURL}/genre/movie/list?api_key=${api_key}&language=pt-BR`)
      .then((response) => {
        console.log("******* GENRES *********");
        console.log(response.data);
        setGenres(response.data.genres);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const Lista = () => {
    setLoading(true);
    axios
      .get(
        `${BaseURL}/movie/popular?api_key=${api_key}&language=pt-BR&page=${page}`
      )
      .then((response) => {
        setLoading(false);
        setFilmes(response.data.results);
        setFiltrar(response.data.result);
        console.log(response.data.results);
      })
      .catch((err) => {
        setLoading(false);
        console.log(err);
      });
  };

  const onSelectGenre = (type) => {
    const index = selectedGenres.indexOf(type);
    if (index === -1) {
      selectedGenres.push(type);
    } else {
      selectedGenres.splice(index, 1);
    }

    const genreIds = selectedGenres.join(",");

    axios
      .get(
        `${BaseURL}/movie/popular?api_key=${api_key}&language=pt-BR&with_genres=${genreIds}`
      )
      .then((response) => {
        setFilmes(response.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getPrevious = () => {
    setPage((page) => page - 1);
  };

  const getNext = () => {
    setPage((page) => page + 1);
  };

  return (
    <Container maxW={"100%"}>
      <Box bg="#2D0C5E" padding={"70px"} w={"full"}>
        <Text
          align={"center"}
          fontSize={"50px"}
          color={"#FFFFFF"}
          fontFamily={"Roboto"}
        >
          Milhões de filmes, séries e pessoas para descobrir.Explore já
        </Text>
        <Text align={"center"} fontSize={"15px"} color={"#FFFFFF"}>
          FILTRE POR:
        </Text>
        <Stack direction="column">
          <Box
            display={"-webkit-inline-box"}
            justifyContent="center"
            align="center"
            py={12}
          >
            <ButtonGroup display="-webkit-inline-box">
              {genres.map((genre) => {
                return (
                  <Button
                    mt={"10px"}
                    bg={"white"}
                    onClick={() => onSelectGenre(genre.id)}
                  >
                    {genre.name}
                  </Button>
                );
              })}
            </ButtonGroup>
          </Box>
        </Stack>
      </Box>

      {loading ? (
        <Stack direction="row" justify={"center"} h={500} align={'center'}>
          <CircularProgress isIndeterminate color="green.300" />
        </Stack>
      ) : (
        <Flex justify={"space-around"} direction={"row"} wrap={"wrap"}>
          {filmes.map((filme) => {
            return (
              <Box
                m={"50px"}
                mt={"20px"}
                borderRadius={"5px"}
                gap={"10px"}
                maxW="sm"
                key={filme.id}
                margin={"5px"}
              >
                <Box m={"20px"}>
                  <Image
                    boxShadow={" inset 0 0 1em gray, 0 0 1em black;"}
                    borderRadius={"5px"}
                    alignItems={"center"}
                    boxSize={"500px"}
                    src={`https://image.tmdb.org/t/p/w500/${filme.poster_path}`}
                  />
                </Box>

                <Text align={"center"} fontFamily={"roboto"} fontSize={"20px"}>
                  {filme.title}
                </Text>

                <Box align="center">
                  {moment(filme.release_date).format("ll")}
                </Box>

                <Button
                  boxShadow={" inset 0 0 1em gray, 0 0 1em black;"}
                  bg={"white"}
                  justifyItems={"center"}
                  onClick={() => gotToDetalhes(navigate, filme.id)}
                >
                  Detalhes
                </Button>
              </Box>
            );
          })}
        </Flex>
      )}
      <Stack direction="row" spacing={4} justify={"center"}>
        {loading ? (
          <div></div>
        ) : (
          <Stack direction="row" spacing={4}>
            <Button
              colorScheme="teal"
              variant="outline"
              onClick={getPrevious}
              // display={page !== 1}
            >
              Anterior
            </Button>
            <Button colorScheme="teal" variant="outline" onClick={getNext}>
              Proximo
            </Button>
          </Stack>
        )}
      </Stack>
    </Container>
  );
};
