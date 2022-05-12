import { Badge, Box, Flex, Button } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { PostStateContext } from "../../global/PostStateContext";
import { BASE_URL } from "../constats/urls";
import {
  faArrowUp,
  faArrowDown,
  faMessage,
} from "@fortawesome/free-solid-svg-icons";

const PostCard = ({ getPosts, data }) => {
  const { setSelectedPost } = useContext(PostStateContext);
  const navigate = useNavigate();

  const headers = {
    headers: {
      Authorization: localStorage.getItem("token"),
    },
  };

  const changePostVote = (id, direction, userVote) => {
    if (userVote === direction) {
      deletePostVote(id);
    } else {
      axios
        .put(`${BASE_URL}/posts/${id}/votes`, { direction: direction }, headers)
        .then((response) => {
          getPosts();
        })
        .catch((err) => {
          handleErrorMessage(err);
        });
    }
  };

  const deletePostVote = (id) => {
    axios
      .delete(`${BASE_URL}/posts/${id}/votes`, headers)
      .then((response) => {
        getPosts();
      })
      .catch((err) => {
        handleErrorMessage(err);
      });
  };

  const handleErrorMessage = (err) => {
    if (err.data && err.data.response.message) {
      alert(err.response.data.message);
    } else {
      alert("Erro ao processar solicitação");
    }
  };

  const goToPostComment = (post) => {
    setSelectedPost(post);
    navigate(`/post/${post.id}`);
  };

  return (
    <div>
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
            <Box border={"1px"} borderRadius={"28px"} borderColor={"#ececec"}>
          <Flex direction={"row"} justify={"space-between"} align={"center"}>
            <Button bg="none" borderRadius={"50%"} 
              onClick={() => changePostVote(data.id, 1, data.userVote)}
              leftIcon={
                <FontAwesomeIcon
                  icon={faArrowUp}
                  color={data.userVote === 1 ? "green" : "#6f6f6f"}
                />
              }
            ></Button>
            <p>{data.voteSum || 0}</p>
            <Button bg="none" borderRadius={"50%"} 
              onClick={() => changePostVote(data.id, -1, data.userVote)}
              leftIcon={
                <FontAwesomeIcon
                  icon={faArrowDown}
                  color={data.userVote === -1 ? "red" : "#6f6f6f"}
                />
              }
            ></Button>
          </Flex>
          </Box>
          <Box>
            <Button bg="none" borderRadius={"50%"} 
              leftIcon={<FontAwesomeIcon icon={faMessage} />}
              onClick={() => goToPostComment(data)}
            >
              {data.commentCount || 0}
            </Button>
          </Box>
        </Flex>
      </Box>
    </div>
  );
};

export default PostCard;
