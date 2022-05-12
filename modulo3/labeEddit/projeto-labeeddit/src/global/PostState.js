import React, { useState } from "react";
import { PostStateContext } from "./PostStateContext";

const PostState = (props) => {
  const [selectedPost, setSelectedPost] = useState({});

  const request = {
    selectedPost,
    setSelectedPost,
  };
  return (
    <PostStateContext.Provider value={request}>
      {props.children}
    </PostStateContext.Provider>
  );
};

export default PostState;
