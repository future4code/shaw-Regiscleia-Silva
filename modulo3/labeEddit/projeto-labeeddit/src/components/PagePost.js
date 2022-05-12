import {
  Badge,
  border,
  Box,
  Button,
  ButtonGroup,
  Divider,
  Flex,
  Skeleton,
  Stack,
  Textarea,
} from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import React, { useEffect, useContext } from "react";
import { useState } from "react";
import useForm from "../hooks/useForm";
import { BASE_URL } from "./constats/urls";
import {
  faArrowUp,
  faArrowDown,
  faMessage,
} from "@fortawesome/free-solid-svg-icons";
import { useParams } from "react-router-dom";
import { PostStateContext } from "../global/PostStateContext";
import PostCard from "./PostCard/PostCard";

const Pagepost = () => {
  const params = useParams();
  const { selectedPost } = useContext(PostStateContext);
  const [loading, setLoading] = useState(false);
  const [responding, setResponding] = useState(false);
  const [comments, setComments] = useState([]);
  const [form, onChange, clear] = useForm({ body: "" });

  const headers = {
    headers: {
      Authorization: localStorage.getItem("token"),
    },
  };

  useEffect(() => {
    getPostComments();
  }, []);

  const getPostComments = () => {
    setLoading(true);
    axios
      .get(`${BASE_URL}/posts/${params.id}/comments`, headers)
      .then((response) => {
        setLoading(false);
        setComments(response.data);
      })
      .catch((err) => {
        setLoading(false);
        alert(err.response.data.message);
      });
  };

  const changeCommentVote = (id, direction, userVote) => {
    if (userVote === direction) {
      deleteCommentVote(id);
    } else {
      axios
        .put(
          `${BASE_URL}/comments/${id}/votes`,
          { direction: direction },
          headers
        )
        .then((response) => {
          getPostComments();
        })
        .catch((err) => {
          alert(err.response.data.message);
        });
    }
  };

  const deleteCommentVote = (id) => {
    axios
      .delete(`${BASE_URL}/comments/${id}/votes`, headers)
      .then((response) => {
        getPostComments();
      })
      .catch((err) => {
        alert(err.response.data.message);
      });
  };

  const createComment = (event) => {
    setResponding(true);
    event.preventDefault();
    axios
      .post(`${BASE_URL}/posts/${params.id}/comments`, form, headers)
      .then((response) => {
        setResponding(false);
        clear();
        getPostComments();
      })
      .catch((err) => {
        setResponding(false);
        alert(err.response.data.message);
      });
  };

  return (
    <Flex direction={"column"}>
      <PostCard data={selectedPost} />

      <form onSubmit={createComment}>
        <Flex direction={"column"} p={"5px"}>
          <Textarea
            required
            name={"body"}
            type="text"
            placeholder="Adicionar comentário"
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
            colorScheme={'none'}
            isLoading={responding}
          >
            Responder
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
        <Stack margin={"5px"}>
          <Skeleton height="120px" />
          <Skeleton height="120px" />
          <Skeleton height="120px" />
        </Stack>
      ) : (
        <Flex direction={"column"}>
          {comments.map((data) => {
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
                <Box as={"small"}>Enviado por :{data.username}</Box>

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
                  <Box
                    border={"1px"}
                    borderRadius={"28px"}
                    borderColor={"#ececec"}
                  >
                    <Flex
                      direction={"row"}
                      justify={"space-between"}
                      align={"center"}
                    >
                      <Button
                        bg="none"
                        borderRadius={"50%"}
                        onClick={() =>
                          changeCommentVote(data.id, 1, data.userVote)
                        }
                        leftIcon={
                          <FontAwesomeIcon
                            icon={faArrowUp}
                            color={data.userVote === 1 ? "green" : "#6f6f6f"}
                          />
                        }
                      ></Button>
                      <p>{data.voteSum || 0}</p>
                      <Button
                        bg="none"
                        borderRadius={"50%"}
                        onClick={() =>
                          changeCommentVote(data.id, -1, data.userVote)
                        }
                        leftIcon={
                          <FontAwesomeIcon
                            icon={faArrowDown}
                            color={data.userVote === -1 ? "red" : "#6f6f6f"}
                          />
                        }
                      ></Button>
                    </Flex>
                  </Box>
                </Flex>
              </Box>
            );
          })}
        </Flex>
      )}
    </Flex>
  );
};

export default Pagepost;
