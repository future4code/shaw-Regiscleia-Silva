import React from "react";
import styled from "styled-components";


const BalaoDeMensagem = styled.div`
  max-width: 60%;
  word-wrap: break-word;
  padding: .3em .8em;
  margin: .2em 0;
  min-width: 8%;
  border-radius:0.5em;
  padding:0.9em 0.8em;
  box-shadow: 1px 3px 3px 1px gray  ;

  background-color: ${(props) => {
    if (props.tipo === "eu") {
      return "bisque";
    } else if (props.tipo === "outro") {
      return "white";
    }
  }};

  align-self: ${props => {
    if (props.tipo === "eu") {
      return "flex-end";
    } else {
      return "flex-start";
    }
  }};

  margin-right: ${(props) => {
    if (props.tipo === "eu") {
      return "1em";
    }
  }};

  margin-left: ${(props) => {
    if (props.tipo !== "eu") {
      return "1em";
    }
  }};
`;

export const ContainerNome = styled.div`
color: black;
font-size: 0.8;
font-weight: bold;

`
class BalaoMensagem extends React.Component {

  render() {
    const nome = this.props.nome.toLowerCase();
    if (nome === "eu") {
      return (
        <BalaoDeMensagem tipo={"eu"}>
            {this.props.conteudo}
            </BalaoDeMensagem>
        
      );
    } else {
      return (
        <BalaoDeMensagem tipo={"outro"}>
          <ContainerNome>{this.props.nome}</ContainerNome>
          <div>{this.props.conteudo}</div>
        </BalaoDeMensagem>
       
      );
    }
  }
}

export default BalaoMensagem;
