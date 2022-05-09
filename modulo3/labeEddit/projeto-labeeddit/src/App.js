
import './App.css';
import * as React from "react"
import {ChakraProvider} from "@chakra-ui/react"
import Routers from './routers/Routers';

const App=()=> {
  return (
    <ChakraProvider>
    <Routers/>
    <App/>
    
    </ChakraProvider>
  );
}

export default App;
