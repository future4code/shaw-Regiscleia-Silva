import React from "react";
//import "./CardPequeno.css";
import styled from "styled-components";

const LittleCardContainer = styled. div`
display: flex;
align-items: center;
border: 1px solid black;
padding: 20px 10px;
margin-bottom: 10px;
height: 50px;
`
const LittleCardImg = styled.img `
width: 30px;
margin-right: 60px;
border-radius: 50%;
`
const LittleCard = styled.h4`
 margin-bottom: 15px;
 `

 const LitleInfo = styled.div` 
 display: flex;
 flex-direction: column;
 justify-items: flex-start;
 `
function CardPequeno(props) {
  return (
    <div>
      <LittleCardContainer>
        <LittleCardImg  src={props.imagem} />
        <LitleInfo >
          <p><b>Email: </b> {props.email}</p>
        </LitleInfo >
      </LittleCardContainer>
      <LittleCardContainer>
        <LittleCardImg  src={props.imagem2} />
        <LitleInfo >
          <p><b>Endereço: </b> {props.endereco}</p>
        </LitleInfo >
      </LittleCardContainer>
    </div>
  );
}
export default CardPequeno;
