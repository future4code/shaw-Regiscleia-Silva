import react from "react";
import axios from "axios";
import useForm from "../hooks/useForm";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { cadastro } from "../coodinator/Coodinator";
import {
  Box,
  Button,
  ButtonGroup,
  Divider,
  Flex,
  Image,
  Input,
  RequiredIndicator,
} from "@chakra-ui/react";
import logo from "../imgs/unnamed.jpg";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
} from "@chakra-ui/react";
import { BASE_URL } from "./constats/urls";
import useUnProtectsPage from "../hooks/useUnprotectsPage";

const PageLogin = () => {
  useUnProtectsPage();

  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [form, onChange, clear] = useForm({ email: "", password: "" });

  const onClickForm = (event) => {
    event.preventDefault();
    setLoading(true);
    axios
      .post(`${BASE_URL}/users/login`, form)
      .then((response) => {
        setLoading(false);
        localStorage.setItem("token", response.data.token);
        console.log(response.data);
        clear();
        navigate("/feed");
      })
      .catch((err) => {
        setLoading(false);
        alert("Usuario ou senha invalidos");
      });
  };

  return (
    <Flex direction={"column"} padding={"2em"}>
      <Image boxSize={"150px"} src={logo} alignSelf={"center"} />
      <Box as={"h1"} alignSelf={"center"} fontSize={"20px"} fontWeight={"bold"}>
        LabEddit
      </Box>
      <Box as={"p"} alignSelf={"center"}>
        O projeto de rede social da Labenu
      </Box>
      <form onSubmit={onClickForm}>
        <Flex mt={"3em"} direction={"column"}>
          <Input
            backgroundColor={"white"}
            borderRadius={"4px"}
            fontSize={"0.9em"}
            fontWeight={"400"}
            mb={"10px"}
            required
            name={"email"}
            type="email"
            placeholder="Email"
            value={form.email}
            onChange={onChange}
          />

          <Input
            backgroundColor={"white"}
            borderRadius={"4px"}
            fontSize={"0.9em"}
            fontWeight={"400"}
            mb={"2.5em"}
            required
            name={"password"}
            placeholder="Senha"
            type="password"
            value={form.password}
            onChange={onChange}
            min={"8"}
          />

          <Button
            type="submit"
            bgGradient="linear(to-r, green.200, pink.500)"
            color={"white"}
            fontWeight={"bold"}
            border={"none"}
            borderRadius={"12px"}
            colorScheme={"pink.500"}
            isLoading={loading}
          >
            Entrar
          </Button>
        </Flex>
      </form>
      <Divider
        mt={"10px"}
        border={"none"}
        h={"1px"}
        bgGradient="linear(to-r, green.200, pink.500)"
        mb={"10px"}
      />
      <Button
        bg={"white"}
        color={"pink.500"}
        border={"1px"}
        borderRadius={"12px"}
        onClick={() => cadastro(navigate)}
      >
        Cadastre-se
      </Button>
    </Flex>
  );
};

export default PageLogin;
