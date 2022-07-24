
import { ChakraProvider } from '@chakra-ui/react';
import './App.css';
import { Headers } from './componentes/Hearders';
import {Router} from "./Routes"

function App() {
  return (
    <ChakraProvider>
      <Headers/>
      <Router/>
    </ChakraProvider>
  );
}

export default App;
