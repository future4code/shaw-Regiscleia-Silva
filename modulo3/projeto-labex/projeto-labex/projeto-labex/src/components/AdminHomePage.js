import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";



const aluno = "regiscleia-dias-shaw";

export const AdminHomePage = () => {
  const navigate = useNavigate();

  const pageInicial = () => {
    navigate(-1);
  };

  const pageNovaViagem = () => {
    navigate("/admin/trips/create");
  };

  const pageLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/login");
    }
  }, []);

  const deleteTrip =(id)=>{
    const url = `https://us-central1-labenu-apis.cloudfunctions.net/labeX/${aluno}/trips/${id}`
const token = localStorage.getItem("token");
const headers = {
  auth: token,
};


axios
 .delete(url,headers)
 .then((response)=>{
alert("Ação realizada com sucesso")
 })
 .catch((err)=>{
   console.log(err)
 })
  }
  

  return (
    <div>
      {/* <onClick={deleteTrip}/> */}
      <button onClick={pageInicial}>Volta</button>
      <button onClick={pageNovaViagem}>Criar viagem</button>
      <button onClick={pageLogout}>Logout</button>
    </div>
  );
};
