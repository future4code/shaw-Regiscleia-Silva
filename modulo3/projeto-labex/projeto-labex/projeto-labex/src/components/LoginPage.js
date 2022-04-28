import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import useForm from "../hooks/useForm";



const aluno = "regiscleia-dias-shaw";

export const LoginPage = () => {
  const navigate = useNavigate();

  const { form, onChange, cleanFields } = useForm({
    email: "",
    password: "",
  });

  const cadastrar = (event) => {
    event.preventDefault();
    login();
    cleanFields();
  };

  const login = () => {
    const url = `https://us-central1-labenu-apis.cloudfunctions.net/labeX/${aluno}/login`;

    axios
      .post(url, form)
      .then((response) => {
        console.log(response.data.token);
        if (response.data.success) {
          navigate("/admin/trips/list");
        }
        localStorage.setItem("token", response.data.token);
      })
      .catch((err) => {
        alert("Usuario ou senha invalidos");
      });
  };

  const pageVoltar = () => {
    navigate(-1);
  };

  return (
    <div>
      <h2>Login ADM</h2>
      <form onSubmit={cadastrar}>
        <input
          name="email"
          value={form.email}
          placeholder="Email"
          onChange={onChange}
          type="email"
          required
          title={"digite um email valido"}
        />
        <input
          name="password"
          value={form.password}
          placeholder="Senha"
          onChange={onChange}
          type="password"
          required
          
        />
        <button onClick={pageVoltar}>Voltar </button>
        <button>Entrar</button>
      </form>
    </div>
  );
};
