import axios from "axios";
import { useState, useEffect } from "react";

export default function Pokecard(props) {
  const [pokemon, setPokemon] = useState("");
  useEffect(() => {
    const pegaPokemon = (pokeName) => {
      axios
        .get(`https://pokeapi.co/api/v2/pokemon/${pokeName}`)
        .then((response) => {
          // guarda as infos do pokemon no estado
          setPokemon(response.data);
        })
        .catch((err) => {
          console.log(err);
        });
    };

    pegaPokemon(props.pokemon);
  }, [props.pokemon]);

  return (
    <div>
      <p>{pokemon.name}</p>
      <p>{pokemon.weight} Kg</p>
      {pokemon.types && <p>{pokemon.types[0].type.name}</p>}
      {pokemon.sprites && (
        <img src={pokemon.sprites.front_default} alt={pokemon.name} />
      )}
    </div>
  );
}
