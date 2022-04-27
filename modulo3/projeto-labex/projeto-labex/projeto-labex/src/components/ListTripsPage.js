import { useNavigate } from "react-router-dom";

export const ListTripsPage = () => {
  const navigate = useNavigate();

  const pageInscrever = () => {
    navigate("/trips/application");
  };
  const Voltar = () => {
    navigate(-1);
  };
  return (
    <div>
      <p>Lista de Viagens</p>

      <button onClick={Voltar}>Voltar</button>
      <button onClick={pageInscrever}>inscreva-se</button>
    </div>
  );
};
