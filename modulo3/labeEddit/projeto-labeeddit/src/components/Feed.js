import react from "react";
import axios from "axios";
import { login } from "../coodinator/Coodinator";
import { Box, Button, ButtonGroup, Flex, Badge } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { BASE_URL } from "./constats/urls";
import useProtectsPage from "../hooks/useProtectsPage";
import {
  faArrowUp,
  faArrowDown,
  faMessage,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Feed = () => {
  //useProtectsPage();
  const [posts, setPosts] = useState([]);

  const headers = {
    headers: {
      Authorization: localStorage.getItem("token"),
    },
  };

  useEffect(() => {
    getPost();
  }, []);

  const getPost = () => {
    axios
      .get(`${BASE_URL}/posts`, headers)
      .then((response) => {
        setPosts(response.data);
      })
      .catch((err) => {
        alert(err.response.data.message);
      });
  };

  return (
    <div>
      <h1>Feed</h1>
      <Flex direction={"column"}>
        {posts.map((data) => {
          return (
            <Box
              margin={"5px"}
              key={data.id}
              borderWidth="1px"
              borderRadius="12px"
              borderColor={"#e0e0e0"}
              bg={"#fbfbfb"}
              p={"9px"}
            >
              <Badge borderRadius="full" px="2" colorScheme="teal">
                Enviado por :{data.title}
              </Badge>

              <Box
                mt="2"
                mb="4"
                fontWeight="semibold"
                as="h4"
                lineHeight="tight"
                isTruncated
              >
                {data.body}
              </Box>
              <Flex direction={"row"} justify={"space-between"}>
                <Flex direction={"row"}>
                  <Button
                    leftIcon={<FontAwesomeIcon icon={faArrowUp} />}
                  ></Button>
                  <p>{data.voteSum}</p>
                  <Button
                    leftIcon={<FontAwesomeIcon icon={faArrowDown} />}
                  ></Button>
                </Flex>
                <Box>
                  <Button
                    leftIcon={<FontAwesomeIcon icon={faMessage} />}
                  ></Button>
                </Box>
              </Flex>
            </Box>
          );
        })}
      </Flex>
    </div>
  );
};

export default Feed;
