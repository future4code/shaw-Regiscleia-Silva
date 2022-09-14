import { Menu, MenuButton, MenuList, MenuItem, Button, Flex } from "@chakra-ui/react";
import {
  goDiaDeSorte,
  golotoFacil,
  goLotoMania,
  goMega,
  goQuina,
  goTime,
  Navigate,
} from "../routes/codineitor";

export const Headers = () => {
  // const navigate = useNavigate();
  const navigate = new Navigate();
return(
  <Flex alignSelf={"flex-start"}>
  <Menu  flexDirection={"column"}>
    {({ loterias }) => (
      <>
        <MenuButton bg={"white"} isActive={loterias} as={Button}>
          {loterias ? "Close" : "Loterias"}
        </MenuButton>
        <MenuList>
          <MenuItem onClick={() => navigate.goMega()}>MegaSena</MenuItem>
          <MenuItem onClick={() => navigate.goQuina()}>Quina</MenuItem>
          <MenuItem onClick={() => navigate.goTime()}>TimeMania</MenuItem>
          <MenuItem onClick={() => navigate.goLotoMania()}>LotoMania</MenuItem>
          <MenuItem onClick={() => navigate.golotoFacil()}>LotoFacil</MenuItem>
          <MenuItem onClick={() => navigate.goDiaDeSorte()}>
            Dia de Sorte
          </MenuItem>
        </MenuList>
      </>
    )}
  </Menu>
  </Flex>
)
};
