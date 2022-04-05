import React from "react";
import styled from "styled-components";
import Post from "./components/Post/Post";

import regiscleia from "./img/foto_regiscleia.jpeg";
import arituba from "./img/arituba.jpeg";
//import marcelo from "./img/marcelo.jpeg";
//import natal from "./img/natal.jpeg";


const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

const InputContainer = styled.input`
width: 100%;
padding: 0.8em;
margin-bottom: 1em;
border-radius: 0.3em;
border: 1px solid gray;

`
  const Botao = styled.button`
  color: red;
  background-color: pink;
  width: 15em;
  `


class App extends React.Component {
  state = {
    posts: [
      {
        nome: "paulinha",
        fotoUsuario: "https://picsum.photos/50/50",
        fotoPost: "https://picsum.photos/200/150",
      },
      {
        nome: "Regiscleia",
        fotoUsuario: "https://picsum.photos/50/50",
        fotoPost: "https://picsum.photos/200/150",
      },
      {
        nome: "Marcelo",
        fotoUsuario: "https://picsum.photos/50/50",
        fotoPost: "https://picsum.photos/200/150",
      },
    ],

    valorInputNome: "",
    valorInputFoto: "",
    valorInputPostagem: ""
  };

  adicionarPostagem = () => {
    const NovaPostagem = {
      nome: this.state.valorInputNome,
      fotoUsuario: this.state.valorInputFoto,
      fotoPost: this.state.valorInputPostagem,
    };
    const postagens = [...this.state.posts, NovaPostagem];
    this.setState({ posts: postagens });

    this.setState({valorInputNome : ''})
    this.setState({valorInputFoto : ''})
    this.setState({valorInputPostagem : ''})
  };

  onChangeInputnome = (event) => {
    this.setState({ valorInputNome: event.target.value });
  };

  onChangeInputFoto = (event) => {
    this.setState({ valorInputFoto: event.target.value });
  };

  onChangeInputPostagem = (event) => {
    this.setState({ valorInputPostagem: event.target.value });
  };

  render() {
    const listaDePosts = this.state.posts.map((post) => {
      return (
        <Post
          nomeUsuario={post.nome}
          fotoUsuario={regiscleia}
          fotoPost={arituba}
        />
      );
    });

    return (
      <MainContainer>
        
          <h1>Novo Post</h1>
          <div>
            <InputContainer
              value={this.state.valorInputNome}
              onChange={this.onChangeInputnome}
              placeholder={"Nome"}
            />
            <InputContainer
              value={this.state.valorInputFoto}
              onChange={this.onChangeInputFoto}
              placeholder={"foto"}
            />
            <InputContainer
              value={this.state.valorInputPostagem}
              onChange={this.onChangeInputPostagem}
              placeholder={"seu Post"}
            />
            <Botao onClick={this.adicionarPostagem}>Postar</Botao>
          </div>
       

        <div>{listaDePosts}</div>
      </MainContainer>
    );

  
  }
}

export default App;
