import { useNavigate } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";
import { useEffect, useState } from "react";

export const ListTripsPage = () => {
  const navigate = useNavigate();
  const [trips, setTrips] = useState([]);

  useEffect(() => {
    getTrips();
  }, []);

  const getTrips = () => {
    const url = `https://us-central1-labenu-apis.cloudfunctions.net/labeX/regiscleia-dias-shaw/trips`;
    const token = localStorage.getItem("token");
    const headers = {
      auth: token,
    };

    axios
      .get(url, headers)
      .then((response) => {
        setTrips(response.data.trips);
        console.log(response.data.trips);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const pageInscrever = () => {
    navigate("/trips/application");
  };
  const Voltar = () => {
    navigate(-1);
  };

  return (
    <div>
      <p>Lista de Viagens</p>

      <button onClick={Voltar}>Voltar</button>
      <button onClick={pageInscrever}>inscreva-se</button>

      <ul>
        {trips.map((trip) => {
          return (
            <li>
              <div>
                <h4>Viagem:{trip.name} </h4>
                <p>Planeta:{trip.planet}</p>
                <p>Duração:{trip.durationInDays}</p>
                <p>Descrição:{trip.description}</p>
                <p>Data:{trip.date}</p>
              </div>
              
            </li>
          );
        })}
      </ul>
    </div>
  );
};
