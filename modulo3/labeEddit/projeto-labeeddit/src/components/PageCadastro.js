import react, { useState } from "react";
import axios from "axios";
import useUnProtectsPage from "../hooks/useUnprotectsPage";
import { useNavigate } from "react-router-dom";
import { feed } from "../coodinator/Coodinator";
import useForm from "../hooks/useForm";
import { BASE_URL } from "./constats/urls";
import {
  Box,
  Button,
  ButtonGroup,
  Checkbox,
  Flex,
  Input,
} from "@chakra-ui/react";

const PageCadastro = () => {
  useUnProtectsPage();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const [form, onChange, clear] = useForm({
    username: "",
    email: "",
    password: "",
  });

  const onClickCadastrar = (event) => {
    event.preventDefault();
    setLoading(true);
    axios
      .post(`${BASE_URL}/users/signup`, form)
      .then((response) => {
        setLoading(false);
        localStorage.setItem("token", response.data.token);
        console.log(response.data);
        clear();
        feed(navigate);
      })
      .catch((err) => {
        setLoading(false);
        alert(err.response.data.message);
      });
  };

  return (
    <Flex direction={"column"} padding={"2em"}>
      <Box as="h1" fontSize={"36px"} fontWeight={"bold"}>
        Olá, boas vindas ao LabEddit ;)
      </Box>
      <form onSubmit={onClickCadastrar}>
        <Flex direction={"column"} mt="30vh">
          <Input
            backgroundColor={"white"}
            borderRadius={"4px"}
            fontSize={"0.9em"}
            fontWeight={"400"}
            mb={"10px"}
            name={"username"}
            value={form.username}
            onChange={onChange}
            placeholder="Nome"
            required
            type={"text"}
          />

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
            mb={"50px"}
            required
            name={"password"}
            placeholder="Senha"
            type="password"
            value={form.password}
            onChange={onChange}
            min={8}
            max={30}
            title={"minimo 8 caracteres"}
          />

          <Box as="p" mb={"10px"}>
            Ao continuar, você concorda com o nosso{" "}
            <Box
              as="span"
              color="blue.600"
              fontSize="sm"
              fontWeight={"bold"}
              cursor={"pointer"}
            >
              Contrato de usuário
            </Box>{" "}
            e nossa{" "}
            <Box
              as="span"
              color="blue.600"
              fontSize="sm"
              fontWeight={"bold"}
              cursor={"pointer"}
            >
              Politíca de Privacidade
            </Box>
          </Box>

          <Checkbox required color={"pink.500"}>
            Eu concordo em receber emails sobre coisas legais no LabEddit
          </Checkbox>

          <Button
            type="submit"
            bgGradient="linear(to-r, green.200, pink.500)"
            color={"white"}
            fontWeight={"bold"}
            border={"none"}
            borderRadius={"12px"}
            colorScheme={"pink.500"}
            mt={"20px"}
            isLoading={loading}
          >
            Cadastrar
          </Button>
        </Flex>
      </form>
    </Flex>
  );
};

export default PageCadastro;
