import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Button, ButtonGroup, Flex, Stack } from '@chakra-ui/react'

const ContaneirPrincipal = styled.div`
p{
  text align:center;
}
`


export const HomePages = () => {
  const navigate = useNavigate();

  const pageViagens = () => {
    navigate("/trips/list");
  };
  const pageAdm = () => {
    navigate("/login");
  };

  return (
    <ContaneirPrincipal>
<Flex justify={"center"} >
      <p>Labex</p>
      
      <Stack spacing={4} direction='row' align='center'>
      <Button colorScheme='green' size='lg' variant='solid'  onClick={pageViagens}>Viagens</Button>
      <Button colorScheme='green' size='lg'onClick={pageAdm}>Area ADM</Button>
    </Stack>
    </Flex>
    </ContaneirPrincipal>
  );
};
