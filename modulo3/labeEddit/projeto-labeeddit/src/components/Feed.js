import react from "react";
import axios from "axios";
import { login } from "../coodinator/Coodinator";
import { Button, ButtonGroup } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const Feed=()=> {
const navigate = useNavigate();

    return (
      <div >
<h1>Feed</h1>
<ButtonGroup>


<Button colorScheme={"orange"} onClick={() => login(navigate)}> Voltar</Button>
</ButtonGroup>
</div>
    )
}

  export default Feed;
  