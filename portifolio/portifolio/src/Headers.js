import { Box, Button, ButtonGroup, Flex, Text } from "@chakra-ui/react";

export const Headers = () => {
  return (
    <div>
      <Flex bg ={"aliceblue"}  border={"1px solid blue"} justify={'space-between'}>
        <Box >
          <Text fontWeight={"bold"} m={"10px"}>Regiscleia Dias</Text>
        </Box>

        <ButtonGroup  >
          <Button bg={"aliceblue"}> Quem sou</Button>
          <Button bg={"aliceblue"}> Projetos</Button>
          <Button bg={"aliceblue"}> Contato</Button>
        </ButtonGroup>
      </Flex>
    </div>
  );
};
