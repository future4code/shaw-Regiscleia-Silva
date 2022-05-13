import { BrowserRouter, Routes, Route } from "react-router-dom";
import Feed from "../components/Feed";
import Headers from "../components/Headers";
import PageCadastro from "../components/PageCadastro";
import PageLogin from "../components/PageLogin";
import PagePost from "../components/PagePost";
import { Flex } from "@chakra-ui/react";

export const Router = () => {
  return (
    <BrowserRouter>
      <Headers />
      <Flex direction={"column"} align={"center"} justify={'center'} padding={"1em"}>
        <Routes>
          <Route index element={<PageLogin />} />
          <Route path="/cadastro" element={<PageCadastro />} />
          <Route path="/feed" element={<Feed />} />
          <Route path="/post/:id" element={<PagePost />} />
        </Routes>
      </Flex>
    </BrowserRouter>
  );
};
