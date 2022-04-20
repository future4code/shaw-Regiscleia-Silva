import axios from "axios";
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { ThemeConsumer } from "styled-components";

const ContainerLista = styled.div`
display: flex;
flex-direction: center;
border: 1px solid black;
height: 100%;
width: 50%;
margin:0 auto;
}
button{
    margin-top:80%;
}
`;
const aluno = "regiscleia-shaw";

const ListaMatches = (props) => {
  const [matches, setMatches] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://us-central1-missao-newton.cloudfunctions.net/astroMatch/${aluno}/matches`
      )
      .then((response) => {
        setMatches(response.data.matches);
      })
      .catch((err) => err.response);
  }, []);

  return (
    <div>
      <ContainerLista>
        <header>
          <h1>astroMatch</h1>
          <button onClick={() => props.renderizacao("Profile")}>voltar</button>
        </header>
        <ul>
          {matches.map((matche) => {
            return <li>{matche.name}</li>;
          })}
        </ul>
      </ContainerLista>
    </div>
  );
};
export default ListaMatches;
