  import { useNavigate } from "react-router-dom";



export const  ListTripsPage =()=> {
  const navigate = useNavigate();
  
  const pageInscrever =()=>{
    navigate ("/trips/application")
  }
  const Voltar = () => {
    navigate("-1");
    return (
      <div >

          <p>Lista de Viagens</p>


          <button onChange={Voltar}>Voltar</button>
          <button onChange={pageInscrever}>inscreva-se</button>
      </div>
    );
  }
}
