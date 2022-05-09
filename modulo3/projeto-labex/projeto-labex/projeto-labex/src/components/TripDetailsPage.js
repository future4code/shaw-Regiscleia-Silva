import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const aluno = "regiscleia-dias-shaw";

export const TripDetailsPage = () => {
  const [trip, setTrip] = useState([]);
  const [candidatos, setCadidatos]= useState([])
  const [aprovados, setAprovados] = useState([])

  const params = useParams();
  const navigate = useNavigate();
  const voltar = () => {
    navigate(-1);
  };
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/login");
    }

    const getTripDetail = () => {
      const url = `https://us-central1-labenu-apis.cloudfunctions.net/labeX/${aluno}/trip/${params.id}`;

      const headers = {
        headers: {
          auth: token,
        },
      };

      axios
        .get(url, headers)
        .then((response) => {
          setTrip(response.data.trip);
          setCadidatos(response.data.trip.candidates)
          setAprovados(response.data.trip.approved)
        })

        .catch((err) => {
          console.log(err);
        });
    };

    getTripDetail();
  }, []);

  const decideCadidate = (candidateId, approve) => {
    const url = `https://us-central1-labenu-apis.cloudfunctions.net/labeX/${aluno}/trips/${params.id}/candidates/${candidateId}/decide`;
    const token = localStorage.getItem("token");

    const headers = {
      headers: {
        auth: token,
      },
    };
    const bodyCadidate = {
      approve: approve,
    };

    axios
      .put(url, bodyCadidate, headers)
      .then((response) => {        
        alert("Ação realizada com sucesso");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div>
     
      <button onClick={voltar}>Voltar</button>

      <h2>{trip.name}</h2>
      <p>Planeta: {trip.planet}</p>
      <p>Duração: {trip.durationInDays}</p>
      <p>Descrição: {trip.description}</p>
      <p>Data: {trip.date}</p>
      <h1>Candidatos Pendentes</h1>

       <ul>
        
       {candidatos.length === 0 ?"nenhum candidato pendente": candidatos.map((candidato) => {
          return(
           <li key ={candidato.id}>
          <div>
           
        <p>texto de candidatura: {candidato.applicationText}</p>
        <p>profissao: {candidato.profession}</p>
        <p>idade: {candidato.age}</p>
       <p>nome: {candidato.name}</p>
        <p>pais:  {candidato.country}</p>
        <button onClick={()=> decideCadidate(candidato.id, false)}>Reprovado</button>
      <button onClick={()=>decideCadidate(candidato.id, true)}>Aprovada</button>
          
          </div>
          </li>
          )
        })}
      </ul> 
     
        <h2>Candidatos Aprovados</h2>
        <ul>
        {aprovados.length === 0 ? "nenhum candidato aprovado" : aprovados.map((aprovado) => {
          return(
           <li key ={aprovado.id}>
          <div>
           
        <p>texto de candidatura: {aprovado.applicationText}</p>
        <p>profissao: {aprovado.profession}</p>
        <p>idade: {aprovado.age}</p>
       <p>nome: {aprovado.name}</p>
        <p>pais:  {aprovado.country}</p>
     
      </div>
      </li>
          )
        })}
      </ul>
    </div>
  );
  }