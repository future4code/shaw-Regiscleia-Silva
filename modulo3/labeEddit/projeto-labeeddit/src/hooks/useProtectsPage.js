import { Navigate, useNavigate } from "react-router-dom";
import { useLayoutEffect } from "react";
import { login } from "../coodinator/Coodinator";

const useProtectsPage = () => {
  const navigate = useNavigate();
  useLayoutEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      login(navigate);
    }
  }, [navigate]);
};

export default useProtectsPage;
