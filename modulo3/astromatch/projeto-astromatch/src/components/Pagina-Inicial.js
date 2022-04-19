import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import styled from "styled-components";

const ContainerPrincipal = styled.div`
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
`


export default function (){
    const [users, setUsers] = useState([])
  return (
      <div>
          <ContainerPrincipal>
          <header>
          <p>Astromatch<button>Lista de macths</button></p>
          </header>
          <button> Deu macth</button>
          <button>não deu macth</button>
          </ContainerPrincipal>
      </div>
  )
}