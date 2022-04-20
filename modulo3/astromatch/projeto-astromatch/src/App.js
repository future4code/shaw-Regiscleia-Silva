import "./App.css";

import ListaMatches from "../src/components/ListaMatches";
import React, { useState } from "react";
import Profile from "./components/Profile";

function App() {
  const [pagina, setPagina] = useState("Profile");

  const renderizacao = (pagina) => {
    setPagina(pagina);
  };

  const render = () => {
    switch (pagina) {
      case "Profile":
        return <Profile renderizacao={renderizacao} />;
      case "ListaMatches":
        return < ListaMatches renderizacao={renderizacao} />;
      default:
        return <Profile renderizacao={renderizacao} />;
    }
  };

  {
    return <div>{render()}</div>;
  }
}
export default App;
