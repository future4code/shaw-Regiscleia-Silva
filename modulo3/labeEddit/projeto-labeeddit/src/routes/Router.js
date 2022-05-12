import { BrowserRouter, Routes, Route } from "react-router-dom";
import Feed from "../components/Feed";
import Headers from "../components/Headers";
import PageCadastro from "../components/PageCadastro";
import PageLogin from "../components/PageLogin";
import PagePost from "../components/PagePost";

export const Router = () => {
  return (
    <BrowserRouter>
    <Headers/>
      <Routes>
        <Route index element={<PageLogin />} />
        <Route path="/cadastro" element={<PageCadastro />} />
        <Route path="/feed" element={<Feed />} />
        <Route path="/post/:id" element={<PagePost />} />

      </Routes>
    </BrowserRouter>
  );
};
