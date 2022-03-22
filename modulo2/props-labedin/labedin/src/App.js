import React, { Component } from "react";
// import "./App.css";
import CardGrande from "./components/CardGrande/CardGrande";
import ImagemButton from "./components/ImagemButton/ImagemButton";
import foto from "./imagens/foto_regiscleia.jpeg";
import foto2 from "./imagens/labenu.png";
import foto3 from "./imagens/fisio.jpg";
import CardPequeno from "./components/CardPequeno/CardPequeno";
import foto4 from './imagens/icone-mail.jpg';
import foto5 from './imagens/localizacao.png';
import foto6 from './imagens/seta.png';
import styled from 'styled-components';

const Principal = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 30px;
  padding: 0;
  margin: 0;
  box-sizing: border-box;
`  
const PageSectionContainer = styled.div`
width: 40vw;
margin: 10px 0;
`  
const Title = styled.h2`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
`

function App() {
  return (
    <Principal>
      <PageSectionContainer>
        <Title>Dados pessoais</Title>
        <CardGrande
          imagem={foto}
          nome="Regiscleia"
          descricao="Oi, Sou a Regiscleia tenho 26 anos, atualmente estudante de desenvolvimento full stack pela instituição labenu"
        />


        <ImagemButton
        imagem = {foto6}
          texto="Ver mais"
        />

        <CardPequeno
          imagem={foto4}
          email="regiscleiaa@gmail"
          imagem2 = {foto5}
          endereco="Rua Santa Rosa,Embu das artes - São Paulo"
        />
      </PageSectionContainer>

      <div className="dados"></div>

      <PageSectionContainer>
        <Title>Experiências profissionais</Title>
        <CardGrande
          imagem={foto2}
          nome="Labenu"
          descricao="estudante de desenvovimento full stack"
        />

        <CardGrande
          imagem={foto3}
          nome="Fisioterapeuta"
          descricao="Atuação como instrutora de pilates, fisioterapia hospitalar e home care"
        />
      </PageSectionContainer>

      <PageSectionContainer>
        <Title>Minhas redes sociais</Title>
        <ImagemButton
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png"
          texto="Facebook"
        />

        <ImagemButton
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png"
          texto="Twitter"
        />
      </PageSectionContainer>
    </Principal>
  );
}

export default App;
