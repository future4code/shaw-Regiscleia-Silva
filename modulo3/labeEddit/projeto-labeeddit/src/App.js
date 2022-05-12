import "./App.css";
import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { Router } from "./routes/Router";
import PostState from "./global/PostState";

const App = () => {
  return (
    <ChakraProvider>
      <PostState>
        <Router />
      </PostState>
    </ChakraProvider>
  );
};

export default App;
