import React from "react";
import "./App.css";
//import styled from "styled-components";

class App extends React.Component {
  state = {
    Usuarios: [
      {
        nome: "",
        mensagem: "",
      },
    ],

    valorInputNome: "",
    valorInputMensagem: "",
  };

  adicionaMensagem = () => {
    const novaMensagem = {
      nome: this.state.valorInputNome,
      mensagem: this.state.valorInputMensagem,
    };
    const copiaMensagens = [...this.state.Usuarios, novaMensagem];
    this.setState({ Usuarios: copiaMensagens });
    // limpar cache
    this.setState({ valorInputNome: "" });
    this.setState({ valorInputMensagem: "" });
  };
  onChangeInputNome = (event) => {
    this.setState({ valorInputNome: event.target.value });
  };
  onChangeInputMensagem = (event) => {
    this.setState({ valorInputMensagem: event.target.value });
  };

  render() {
    const mensagem = this.state.Usuarios.map((usuario) => {
      return (
        <div className="msg">
          <div>{usuario.nome}</div>
          <div>{usuario.mensagem}</div>
        </div>
      );
    });

    return (
        <div className="container">
          <h1>whatslab</h1>
          <div className="chat">{mensagem}</div>
          <div >
            <input
              className="inputnome"
              value={this.state.valorInputNome}
              onChange={this.onChangeInputNome}
              placeholder={"Usuario"}
            />
            <input
              className="inputnome"
              value={this.state.valorInputMensagem}
              onChange={this.onChangeInputMensagem}
              placeholder={"mensagem"}
            />
            <button onClick={this.adicionaMensagem}>Enviar</button>
          </div>
        </div>
    );
  }
}
export default App;
