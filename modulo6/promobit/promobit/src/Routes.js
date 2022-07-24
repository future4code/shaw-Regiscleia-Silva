import { Route, BrowserRouter, Routes } from "react-router-dom";
import { Home } from "./componentes/Home";
import { Filtros } from "../src/componentes/Filtros";
import { Detalhes } from "../src/componentes/Detalhes";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="detalhes/:id" element={<Detalhes />} />
        <Route path="filtros" element={<Filtros />} />
      </Routes>
    </BrowserRouter>
  );
};
