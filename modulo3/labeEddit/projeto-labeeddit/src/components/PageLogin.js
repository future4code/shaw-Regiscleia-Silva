import react from "react";
import axios from "axios";
import useForm from "../hooks/useForm";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { cadastro } from "../coodinator/Coodinator";
import {
  Button,
  ButtonGroup,
  Image,
  Input,
  RequiredIndicator,
} from "@chakra-ui/react";
import logo from "../imgs/unnamed.jpg";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
} from "@chakra-ui/react";
import { BASE_URL } from "./constats/urls";
import useUnProtectsPage from "../hooks/useUnprotectsPage";

const PageLogin = () => {
  useUnProtectsPage();

  const navigate = useNavigate();
  const [form, onChange, clear] = useForm({ email: "", password: "" });

  const onClickForm = (event) => {
    event.preventDefault();
    axios
      .post(`${BASE_URL}/users/login`, form)
      .then((response) => {
        localStorage.setItem("token", response.data.token);
        console.log(response.data);
        clear();
        navigate("/feed");
      })
      .catch((err) => {
        alert("Usuario ou senha invalidos");
      });
  };

  return (
    <div>
      <Image boxSize={"150px"} src={logo} />
      <h1>Login </h1>
      <form onSubmit={onClickForm}>
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
          min={"8"}
        />

        <ButtonGroup>
          <Button type="submit" colorScheme={"gray"}>
            Entrar
          </Button>
        </ButtonGroup>
      </form>
      <Button colorScheme={"orange"} onClick={() => cadastro(navigate)}>
        Cadastar-se
      </Button>
    </div>
  );
};

export default PageLogin;
