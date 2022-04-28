import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";
import useForm from "../hooks/useForm";

const aluno = "regiscleia-dias-shaw";

export const CreateTripPage = () => {
  const navigate = useNavigate();
  const { form, onChange, cleanFields } = useForm({
    name: "",
    planet: "",
    date: "",
    description: "",
    durationInDays: "",
  });

  const cadastrar = (event) => {
    event.preventDefault();
    createTrip();  
  };

  const inicial = () => {
    navigate(-1);
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/login");
    }
  }, []);

  const createTrip = () => {
    const url = `https://us-central1-labenu-apis.cloudfunctions.net/labeX/${aluno}/trips`;
    const token = localStorage.getItem("token");
    const headers = {
      auth: token,
    };

    axios
      .post(url, form)
      .then((response) => {
        cleanFields();
        alert("Ação realizada com sucesso");
        navigate("/admin/trips/list")
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <h2>Criar viagem</h2>
      <form onSubmit={cadastrar}>
        <input
          name="name"
          type={'text'}
          value={form.name}
          placeholder="nome"
          onChange={onChange}
          required
          pattern={"^.{5,}$"}
        />

        <select value={form.planet} onChange={onChange} required name="planet">
          <option>Escolha o planeta</option>
          <option>Saturno</option>
          <option>Venus</option>
          <option>marte</option>
          <option>Terra</option>
          <option>Lua</option>
        </select>

        <input
          name="date"
          type="date"
          value={form.date}
          onChange={onChange}
          required
          min={new Date()}
        />

        <input
          name="durationInDays"
          value={form.durationInDays}
          placeholder="Duraçao"
          onChange={onChange}
          required
          min={50}
          title={"minimo de 50 dias de viagem"}
          type={"number"}
        />

        <input
          name="description"
          value={form.description}
          placeholder="Descrição"
          onChange={onChange}
          required
          pattern={"^.{30,}$"}
          title={"no minimo 30 caracteres"}
        />

        <button>Criar</button>
        <button onClick={inicial}>Voltar</button>
      </form>
    </div>
  );
};
