import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const aluno = "regiscleia-dias-shaw";

export const AdminHomePage = () => {
  const navigate = useNavigate();

  const [trips, setTrips] = useState([]);

  const getTrips = () => {
    const url = `https://us-central1-labenu-apis.cloudfunctions.net/labeX/regiscleia-dias-shaw/trips`;
    const token = localStorage.getItem("token");
    const headers = {
      headers: {
        auth: token,
      },
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

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/login");
    } else {
      getTrips();
    }
  }, []);

  const pageInicial = () => {
    navigate(-1);
  };

  const pageNovaViagem = () => {
    navigate("/admin/trips/create");
  };

  const pageLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  const pageDetalhes = (id) => {
    navigate(`/admin/trips/${id}`);
  };

  const deleteTrip = (id) => {
    const url = `https://us-central1-labenu-apis.cloudfunctions.net/labeX/regiscleia-dias-shaw/trips/${id}`;
    const token = localStorage.getItem("token");

    const headers = {
      headers: {
        auth: token,
      },
    };

    axios
      .delete(url, headers)
      .then((response) => {
        alert("Excluído com sucesso");
        getTrips();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <button onClick={pageInicial}>Volta</button>
      <button onClick={pageNovaViagem}>Criar viagem</button>
      <button onClick={pageLogout}>Logout</button>
      <ul>
        {trips.map((trip) => {
          return (
            <li key={trip.id}>
              <div>
                <h4>Viagem:{trip.name} </h4>
                <button onClick={() => deleteTrip(trip.id)}> deletar</button>
                <button onClick={() => pageDetalhes(trip.id)}>Detalhar</button>
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
