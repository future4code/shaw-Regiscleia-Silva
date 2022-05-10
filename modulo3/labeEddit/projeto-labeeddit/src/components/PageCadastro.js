import react from "react";
import axios from "axios";
import useUnProtectsPage from "../hooks/useUnprotectsPage";
import { useNavigate } from "react-router-dom";
import { feed } from "../coodinator/Coodinator";
import useForm from "../hooks/useForm";
import { BASE_URL } from "./constats/urls";
import { Button, ButtonGroup, Input } from "@chakra-ui/react";

const PageCadastro = () => {
  useUnProtectsPage();
  const navigate = useNavigate();

  const [form, onChange, clear] = useForm({
    username: "",
    email: "",
    password: "",
  });

  const onClickCadastrar = (event) => {
    event.preventDefault();
    axios
      .post(`${BASE_URL}/users/signup`, form)
      .then((response) => {
        localStorage.setItem("token", response.data.token);
        console.log(response.data);
        clear();
        feed(navigate);
      })
      .catch((err) => {
        alert(err.response.data.message);
      });
  };

  return (
    <div>
      <h1>Cadastro</h1>
      <form onSubmit={onClickCadastrar}>
        <Input
          name={"username"}
          value={form.username}
          onChange={onChange}
          placeholder="Nome"
          required
          type={"text"}
        />

        <Input
          required
          name={"email"}
          type="email"
          placeholder="Email"
          value={form.email}
          onChange={onChange}
        />

        <Input
          required
          name={"password"}
          placeholder="Senha"
          type="password"
          value={form.password}
          onChange={onChange}
          min={8}
          max={30}
          title={"minimo 8 caracteres"}
        />

        <ButtonGroup>
          <Button colorScheme={"orange"} type={"submit"}>
            Cadastrar
          </Button>
        </ButtonGroup>
      </form>
    </div>
  );
};

export default PageCadastro;
