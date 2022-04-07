import axios from "axios";
import criarplalist from "./components/CriarPlaylist";
import './App.css';
import React from "react";
import CriarPlaylist from "./components/CriarPlaylist";
import ListaPlaylist from "./components/ListaPlaylist";

class App extends React.Component {
  



  render() {
    return (
      <div>
      
  <CriarPlaylist></CriarPlaylist>
  <ListaPlaylist></ListaPlaylist>
      </div>
    )
  }

}


export default App;
