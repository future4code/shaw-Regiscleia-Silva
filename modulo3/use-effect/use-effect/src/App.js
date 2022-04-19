import axios from "axios";
import { useState, useEffect } from "react";
import Pokecard from "./components/Pokecard/Pokecard";
import style from "./Style.css";

export default function App() {
  const [pokeList, setPokelist] = useState([]);
  const [pokeName, setPokeName] = useState("");

  const changePokeName = (event) => {
    setPokeName(event.target.value);
  };

  useEffect(() => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon/?limit=151")
      .then((response) => {
        setPokelist(response.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <div className="App">
        <select onChange={changePokeName}>
          <option value={""}>Nenhum</option>
          {/* renderizando a lista de pokemons como opções do select */}
          {pokeList.map((pokemon) => {
            return (
              <option key={pokemon.name} value={pokemon.name}>
                {pokemon.name}
              </option>
            );
          })}
        </select>
        {/* expressão booleana que renderiza o componente PokeCard,
        caso o valor de pokeName, no estado, seja true */}
        {pokeName && <Pokecard pokemon={pokeName} />}
      </div>
    </div>
  );
}
