import { useNavigate } from "react-router";

export class Navigate {
  navigate = useNavigate();

  goMega = () => {
    this.navigate("/");
  };

  goQuina = () => {
    this.navigate("/quina");
  };

  goTime = () => {
    this.navigate("/timemania");
  };

  goLotoMania = () => {
    this.navigate("/lotomania");
  };

  golotoFacil = () => {
    this.navigate("/lotofacil");
  };

  goDiaDeSorte = () => {
    this.navigate("/diadesorte");
  };
}
