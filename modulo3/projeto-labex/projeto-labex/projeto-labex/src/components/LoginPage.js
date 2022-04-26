import { useNavigate } from "react-router-dom";



export const LoginPage = () => {
  const navigate = useNavigate();

  const pageLogin = () => {
    navigate("/admin/trips/list");
  };
  const pageVoltar = () => {
    navigate(-1);
  };
  return (
    <div>
      <h2>Login ADM</h2>
      <input value="" placeholder="Email" onChange={""} />
      <input value="" placeholder="Senha" onChange={""} />
      <button onChange={pageVoltar}>Voltar </button>
      <button onChange={pageLogin}>Entrar</button>
    </div>
  );
};
