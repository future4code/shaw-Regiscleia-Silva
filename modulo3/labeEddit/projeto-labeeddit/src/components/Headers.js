import { Box, Button, Flex, Grid, GridItem } from "@chakra-ui/react";
import { login } from "../coodinator/Coodinator";
import { useNavigate } from "react-router-dom";

const Headers = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  const logout = () => {
    localStorage.removeItem("token");
    login(navigate);
  };

  return (
    <Box bg={"#ededed"} h={"50px"}>
      <Grid templateColumns="repeat(3, 1fr)" gap={6}>
        <GridItem w="100%" />
        <GridItem w="100%" />
        <GridItem w="100%">
          <Flex justify={"end"}>
            {token ? (
              <Button
                onClick={logout}
                color={"#4088cb"}
                bg={"none"}
                fontSize={"18px"}
                fontWeight={"bold"}
              >
                Logout
              </Button>
            ) : (
              <Button
                onClick={() => login(navigate)}
                color={"#4088cb"}
                bg={"none"}
                fontSize={"18px"}
                fontWeight={"bold"}
              >
                Login
              </Button>
            )}
          </Flex>
        </GridItem>
      </Grid>
    </Box>
  );
};

export default Headers;
