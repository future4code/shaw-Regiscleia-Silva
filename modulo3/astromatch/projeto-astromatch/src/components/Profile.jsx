import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";

const aluno = "regiscleia-shaw";

const ContainerPrincipal = styled.div`
display: flex;
flex-direction: center;
border: 1px solid black;
height: 50%;
width: 50%;
margin:0 auto;
}
button{
    margin-top:80%;
}
img{
    height: 15em;
   width: 15em;
   margin-top: 50%;
}
`;

const Profile = (props) => {
  const [profile, setProfile] = useState({});
  const [deuMacth, setDeuMacth] = useState(true);
  const [naoGostou, setNaoGostou] = useState(false);
  const [escolheu, setEscolheu] = useState(false);

  useEffect(() => {
    const getProfile = () => {
      axios
        .get(
          `https://us-central1-missao-newton.cloudfunctions.net/astroMatch/${aluno}/person/`
        )
        .then((response) => setProfile(response.data.profile))
        .catch((err) => console.log(err));
    };

    getProfile();
  }, [escolheu]);

  const gosta = (gostou) => {
    axios
      .post(
        `https://us-central1-missao-newton.cloudfunctions.net/astroMatch/${aluno}/choose-person`,
        {
          id: profile.id,
          choice: gostou,
        }
      )
      .then((response) => {
        setEscolheu(!escolheu);
      });
  };
  const onClickNaoMacth = () => {
    if (naoGostou) {
      setNaoGostou(naoGostou === false);
    }
  };

  return (
    <div>
      <ContainerPrincipal>
        <header>
          <h1>Astromatch</h1>
          <button onClick={() => props.renderizacao("ListaMatches")}>
            lista
          </button>
        </header>
        <div>
          <img src={profile.photo} alt="perfil" />
        </div>
        <button onClick={() => gosta(true)}> Deu macth</button>
        <button onClick={() => gosta(false)}>não deu macth</button>
      </ContainerPrincipal>
    </div>
  );
};

export default Profile;
