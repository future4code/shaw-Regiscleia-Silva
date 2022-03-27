import React from "react";
import "./App.css";
import styled from "styled-components";
import BalaoMensagem from "./components/BalaoMensagem/BalaoMensagem";
import botao from "./img/enviar-correio.png";

const Titulo = styled.h1`
  font-family: "Courier New", Courier, monospace;
  text-align: center;
  color: violet;
  background: bisque;
`;
const Container = styled.div`
  display: flex;
  flex: 1 1 0%;
  flex-direction: column;
  height: 100vh;
  border: 1px solid black;
  max-width: 600px;
`;

const CampoMensagem = styled.div`
  flex: 1 1 0%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 2.5em;
`;

const InputContainer = styled.div`
  display: grid;
  grid-template-columns: 100px 1fr 50px;
  column-gap: 5px;
  background-color: bisque;
  height: 60px;
  padding: 10px;
`;
const InputMsg = styled.input`
  border-radius: 50px;
  border: none;
`;
const Botao = styled.button`
height: 3em;
width: 3em;
border:none;
background:none;
cursor:pointer;
`
const ImagemB = styled.img`
height: 2em;
width: 2.5em;

`

class App extends React.Component {
  state = {
    Usuarios: [],

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
      return <BalaoMensagem nome={usuario.nome} conteudo={usuario.mensagem} />;
    });

    return (
      <Container>
        <Titulo>whatslab</Titulo>
        <CampoMensagem className="background">{mensagem}</CampoMensagem>
        <InputContainer>
          <InputMsg
            value={this.state.valorInputNome}
            onChange={this.onChangeInputNome}
            placeholder={"Usuario"}
          />
          <InputMsg
            value={this.state.valorInputMensagem}
            onChange={this.onChangeInputMensagem}
            placeholder={"mensagem"}
          />
          
          <Botao  onClick={this.adicionaMensagem}>
            <ImagemB src={botao}/>
          </Botao >
          
        </InputContainer>
      </Container>
    );
  }
}
export default App;
