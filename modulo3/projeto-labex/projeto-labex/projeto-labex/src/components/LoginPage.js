import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const aluno = "regiscleia-dias-shaw";

export const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const navigate = useNavigate();

  const pageLogin = () => {
    const bodyLogin = {
      email: email,
      password: senha,
    };

    const url = `https://us-central1-labenu-apis.cloudfunctions.net/labeX/${aluno}/login`;

    axios
      .post(url, bodyLogin)
      .then((response) => {
        console.log(response.data.token);
        if (response.data.success) {
          navigate("/admin/trips/list");
        }
        localStorage.setItem("token", response.data.token)
      })
      .catch((err) => {
        alert(err.response);
      });
  };
  const pageVoltar = () => {
    navigate(-1);
  };
  const onChangeEmail = (e) => {
    setEmail(e.target.value);
  };
  const onChangeSenha = (e) => {
    setSenha(e.target.value);
  };

  return (
    <div>
      <h2>Login ADM</h2>
      <input
        value={email}
        placeholder="Email"
        onChange={onChangeEmail}
        type="email"
      />
      <input
        value={senha}
        placeholder="Senha"
        onChange={onChangeSenha}
        type="password"
      />
      <button onClick={pageVoltar}>Voltar </button>
      <button onClick={pageLogin}>Entrar</button>
    </div>
  );
};
