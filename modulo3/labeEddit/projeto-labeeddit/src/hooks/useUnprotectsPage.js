import { useNavigate } from "react-router-dom";
import {useEffect} from "react";
import { feed } from "../coodinator/Coodinator";

const useUnProtectsPage = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      feed(navigate);
    }
  }, [navigate]);
};

export default useUnProtectsPage;
