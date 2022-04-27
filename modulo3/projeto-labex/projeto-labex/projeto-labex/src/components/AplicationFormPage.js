
import { useNavigate } from "react-router-dom";

export const AplicationFormPage = () => {

  const navigate = useNavigate()
  const pagevolta= () => {
    navigate(-1);
  }
  return (
    <div>
      <h2>Increva-se</h2>
      <select>
        <option>Escolha uma viagem</option>
      </select>
      <input value="" placeholder="nome" onChange={""} />
      <input value="" placeholder="idade" onChange={""} />
      <input value="" placeholder="candidatura" onChange={""} />
      <input value="" placeholder="Profissão" onChange={""} />
      <select>
        <option>Escolha um Pais</option>
      </select>
      <button onClick={pagevolta}>Voltar</button> <button>Enviar</button>
    </div>
  );
}
