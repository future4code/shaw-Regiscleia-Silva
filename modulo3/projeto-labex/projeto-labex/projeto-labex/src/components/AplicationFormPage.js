import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import useForm from "../hooks/useForm";
import axios from "axios";

export const AplicationFormPage = () => {
  const [trips, setTrips] = useState([]);
  const [paises, setPaises] = useState([]);

  const navigate = useNavigate();

  const { form, onChange, cleanFields } = useForm({
    name: "",
    age: "",
    applicationText: "",
    profession: "",
    country: "",
    trip: "",
  });

  const cadastrar = (event) => {
    event.preventDefault();
    
    const url = `https://us-central1-labenu-apis.cloudfunctions.net/labeX/regiscleia-dias-shaw/trips/${form.trip}/apply`
    axios
    .post(url,form)
    .then((response)=>{
      console.log(response.data)
    })
    .catch((err)=>{
      console.log(err)
    })
    cleanFields();
  };

  useEffect(() => {
    getTrips();
    getCountries();
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

  const getCountries = () => {
    const url = `https://servicodados.ibge.gov.br/api/v1/paises`;

    axios
      .get(url)
      .then((response) => {
        const paises = response.data.map((pais) => pais.nome.abreviado);
        setPaises(paises);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const pagevolta = () => {
    navigate(-1);
  };

  return (
    <div>
      <h2>Increva-se</h2>
      <form onSubmit={cadastrar}>
        <select name="trip" value={form.trip} onChange={onChange} required>
          <option>Escolha uma viagem</option>
          {trips.map((trip) => {
            return (
              <option value={trip.id} key={trip.id}>
                {trip.planet} - {trip.name}
              </option>
            );
          })}
        </select>
        <input
          name="name"
          value={form.name}
          placeholder="nome"
          onChange={onChange}
          type="text"
          required
          pattern={"^.{3,}$"}
          title={"somente letras"}
        />
        <input
          name="age"
          value={form.age}
          placeholder="idade"
          onChange={onChange}
          type="number"
          required
          title={"apenas idade maior de 18 anos"}
          min={18}
        />
        <input
          name="applicationText"
          value={form.applicationText}
          placeholder="candidatura"
          onChange={onChange}
          type="text"
          required
          pattern={"^.{20,}$"}
          title={"minimo de 20 caracteres"}
        />
        <input
          name="profession"
          value={form.profession}
          placeholder="Profissão"
          onChange={onChange}
          type="text"
          required
          pattern={"^.{10,}$"}
          title={"Minimo 10 caracteres"}
        />
        <select
          name="country"
          value={form.country}
          onChange={onChange}
          required
        >
          <option> Escolha um Pais </option>
          {paises.map((pais, index) => {
            return (
              <option value={pais} key={index}>
                {pais}
              </option>
            );
          })}
        </select>
        <button onClick={pagevolta}>Voltar</button>
        <button>Enviar</button>
      </form>
    </div>
  );
};
