import axios from "axios";
import { useState } from "react";
import { baseUrl } from "../constantes/baseUrl";
import UseForm from "../Hooks/UseForm";
import { Headers } from "./Headers";

export const PaginaPesquisa = () => {
  const [user, setUser] = useState({});
  const { form, onChange, clear } = UseForm({
    login: "",
  });

  const onClickPesquisa = (e) => {
    e.preventDefault();

    axios
      .get(`https://api.github.com/users/${form.login}`)
      .then((response) => {
        console.log(response);
        setUser(response.data);
        clear();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
        <Headers/>
      <form>
        <input
          name="login"
          type={"text"}
          value={form.login}
          onChange={onChange}
          placeholder="Nome"
        ></input>
        <button onClick={onClickPesquisa}>Pesquisar</button>

        {!user ? "" : <p>{user.name}</p>}
        <img src={user.avatar_url}></img>
        <p>{user.bio}</p>
        <p>{user.email}</p>
        <p>{user.location}</p>
       
        <a href={user.repos_url}>Repositorio</a>
      </form>
    </div>
  );
};
