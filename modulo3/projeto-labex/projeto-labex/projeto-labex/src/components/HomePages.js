import { useNavigate } from "react-router-dom";

export const HomePages = () => {
  const navigate = useNavigate();

  const pageViagens = () => {
    navigate("/trips/list");
  };
  const pageAdm = () => {
    navigate("/login");
  };

  return (
    <div>
      <p>Labex</p>

      <button onClick={pageViagens}>Viagens</button>
      <button onClick={pageAdm}>Area ADM</button>
    </div>
  );
};
