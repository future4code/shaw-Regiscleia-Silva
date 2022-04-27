import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import {useState} from "react";
import axios from "axios";




const aluno = "regiscleia-dias-shaw";

export const CreateTripPage = () => {
  const [nome,setNome]= useState ("")
  const [planeta, setplaneta] = useState(""); 
  const [data, setData] = useState(new Date);
  const [descricao, setDescricao]= useState("")
  const[duracao, setDuracao] = useState (0)



  const navigate = useNavigate();
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
    const bodyCreate = {
      name: nome,
      planet: planeta,
      date: data,
      description: descricao,
      durationInDays: duracao
    };

    axios
      .post(url, bodyCreate, headers)
      .then((response) => {
        alert("Ação realizada com sucesso");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const onChangeNome =(e)=>{
    setNome(e.target.value)
  }
  const onChangePlaneta =(e)=>{
    setplaneta(e.target.value)
  }
  const onChangeData =(e)=>{
    setData(e.target.value)
  }
  const onChangeDescricao =(e)=>{
    setDescricao(e.target.value)
  }
  const onChangeDuracao =(e)=>{
    setDuracao(e.target.value)
  }
  return (
    <div>
      <h2>Criar viagem</h2>
      <input value={nome} placeholder="nome" onChange={onChangeDescricao} />
      <select>
        <option value={planeta} onChange={onChangePlaneta} >Escolha o planeta</option>
      </select>

      <input type="date" value = {data} onChange={onChangeData}/>
      <input value ={duracao} placeholder="Duraçao" onChange={onChangeNome} />
      <input value ={descricao} placeholder="Descrição" onChange={onChangeDuracao} />
      <button onClick={createTrip}>Criar</button>
      <button onClick={inicial}>Voltar</button>
    </div>
  );
};
