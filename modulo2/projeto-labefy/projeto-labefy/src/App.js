import axios from "axios";
import criarplalist from "./components/CriarPlaylist";
import './App.css';
import React from "react";
import CriarPlaylist from "./components/CriarPlaylist";
import ListaPlaylist from "./components/ListaPlaylist";
import DadosPrincipais from "./components/DadosPrincipais";

class App extends React.Component {
  state = {
    pagina: "list",
    playlist: ""
  }

  pageDetalhes = (playlist) => {
    this.setState({ pagina: "detalhes", playlist: playlist })
  }

  irParaCriarPlaylist = () => {
    this.setState({ pagina: "criar" })
  }

  irParaPlaylists = () => {
    this.setState({ pagina: "list" })
  }
 
  mudarPagina = () => {

    switch (this.state.pagina) {
      case "criar":
        return <CriarPlaylist irParaPlaylists={this.irParaPlaylists} />
      case "list":
        return <ListaPlaylist pageDetalhes={this.pageDetalhes} irParaPlaylistForm={this.irParaCriarPlaylist} />
      case "detalhes":
        return <DadosPrincipais playlist={this.state.playlist} irParaPlaylists={this.irParaPlaylists}/>
      default:
        return <ListaPlaylist pageDetalhes={this.pageDetalhes} irParaPlaylistForm={this.irParaCriarPlaylist} />
    }
  }

  render() {
    return (
      <div>
        {this.mudarPagina()}
      </div>
    )
  }

}


export default App;
