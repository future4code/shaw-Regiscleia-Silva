import axios from "axios";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const aluno = "regiscleia-dias-shaw";

export const TripDetailsPage = () => {

  
  const params = useParams()
  const navigate =useNavigate()
  const voltar = () => {
    navigate(-1);
  }
  useEffect(() => {
    const token = localStorage.getItem("token");
      if (!token) {
        navigate("/login");
      }

    const getTripDetail = () => {
      const url = `https://us-central1-labenu-apis.cloudfunctions.net/labeX/${aluno}/trip/${params.id}`;

      const headers = {
        auth: token,
      };

      axios
        .get(url, headers)
        .then((response) => {
          console.log(response.data.token);
        })

        .catch((err) => {
          alert("senha ou email incorreto");
        });
    };

    getTripDetail();
  }, []);

  const decideCadidate =(tripId, candidateId,approve)=>{
const url = `https://us-central1-labenu-apis.cloudfunctions.net/labeX/${aluno}/trips/${tripId}/candidates/${candidateId}/decide`
const token = localStorage.getItem("token");
const headers = {
  auth: token,
};
const bodyCadidate = {
	"approve": approve
}

axios
 .put(url,bodyCadidate,headers)
 .then((response)=>{
alert("Ação realizada com sucesso")
 })
 .catch((err)=>{
   console.log(err)
 })
  }

  return (
    <div>
      {/* <button onClick={decideCadidate}>Reprovado</button> */}
      {/* <button onClick={"decideCadidate"}>Aprovada</button> */}
      <button onClick={voltar}>Voltar</button>
      
    </div>
  );
};
