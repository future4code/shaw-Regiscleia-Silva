import react, { useContext } from "react";
import axios from "axios";
import { login } from "../coodinator/Coodinator";
import {
  Box,
  Button,
  ButtonGroup,
  Flex,
  Badge,
  Textarea,
  Input,
  Divider,
  Stack,
  Skeleton,
} from "@chakra-ui/react";
import { useNavigate, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { BASE_URL } from "./constats/urls";
import useProtectsPage from "../hooks/useProtectsPage";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import useForm from "../hooks/useForm";
import { PostStateContext } from "../global/PostStateContext";
import PostCard from "./PostCard/PostCard";
import Logo from "../components/Logo/Logo";

const Feed = () => {
  //useProtectsPage();

  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [form, onChange, clear] = useForm({ title: "", body: "" });

  const headers = {
    headers: {
      Authorization: localStorage.getItem("token"),
    },
  };

  useEffect(() => {
    getPost();
  }, []);

  const getPost = () => {
    setLoading(true);
    axios
      .get(`${BASE_URL}/posts?page=${page}&size=10`, headers)
      .then((response) => {
        setLoading(false);
        setPosts((currentList) => [...currentList, ...response.data]);
      })
      .catch((err) => {
        setLoading(false);
        alert(err.response.data.message);
      });
  };

  const createPost = (event) => {
    event.preventDefault();
    axios
      .post(`${BASE_URL}/posts`, form, headers)
      .then((response) => {
        clear();
        getPost();
      })
      .catch((err) => {
        alert(err.response.data.message);
      });
  };

  const carregarMais = () => {
    setPage((page) => page + 1);
    getPost();
  };

  return (
    <Flex direction={"column"} w={["90vw", "90vw", "60vw", "50vw"]}>
      <Logo />
      <form onSubmit={createPost}>
        <Flex direction={"column"} p={"5px"}>
          <Input
            required
            name={"title"}
            type="text"
            placeholder="Escreva seu título..."
            value={form.title}
            onChange={onChange}
            bg={"#ededed"}
            borderRadius="12px"
            border={"none"}
            p={"1em"}
            fontSize="18px"
            mb="10px"
          />

          <Textarea
            required
            name={"body"}
            type="text"
            placeholder="Escreva seu post..."
            value={form.body}
            onChange={onChange}
            bg={"#ededed"}
            borderRadius="12px"
            border={"none"}
            p={"1em"}
            resize={"none"}
            fontSize="18px"
            rows={5}
            mb="10px"
          />

          <Button
            type="submit"
            bgGradient="linear(to-r, green.200, pink.500)"
            color={"white"}
            fontWeight={"bold"}
            border={"none"}
            borderRadius={"12px"}
            colorScheme={"none"}
            _hover={{ opacity: "0.5" }}
          >
            Postar
          </Button>
          <Divider
            mt={"1em"}
            border={"none"}
            h={"1px"}
            bgGradient="linear(to-r, green.200, pink.500)"
          />
        </Flex>
      </form>

      {loading ? (
        <Stack>
          <Skeleton height="120px" />
          <Skeleton height="120px" />
          <Skeleton height="120px" />
        </Stack>
      ) : (
        <Box>
          <Flex direction={"column"}>
            {posts.map((data, index) => {
              return <PostCard key={index} getPosts={getPost} data={data} />;
            })}
          </Flex>

          <Flex justify={"center"}>
            <Button
              bgGradient="linear(to-r, green.200, pink.500)"
              color={"white"}
              fontWeight={"bold"}
              border={"none"}
              borderRadius={"12px"}
              colorScheme={"none"}
              onClick={carregarMais}
            >
              Carregar mais
            </Button>
          </Flex>
        </Box>
      )}
    </Flex>
  );
};

export default Feed;
