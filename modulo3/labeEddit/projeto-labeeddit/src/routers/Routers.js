import react from "react";
import { BrowserRouter, Router, Route } from "react-router-dom";
import Feed from "../components/Feed";
import PageCadastro from "../components/PageCadastro";
import PageLogin from "../components/PageLogin";
import PagePost from "../components/PagePost"



const Routers = () => {
  return (
    <BrowserRouter>
      <Router>
        <Route index element={<PageLogin />} />
        <Route path="/cadastro" element={<PageCadastro />} />
        <Route path="/feed" element={<Feed/>} />
        <Route path="/post/:id" element={<PagePost/>} />
      </Router>
    </BrowserRouter>
  );
};

export default Routers;
