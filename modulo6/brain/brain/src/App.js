
import './App.css';
import { ChakraProvider } from '@chakra-ui/react'
import {Router } from './routes/Router';
import GlobalState from "./global/GlobalState"

function App() {
  return (
    <ChakraProvider>
    <GlobalState>
      <Router />
      </GlobalState>
      </ChakraProvider>
  );
}

export default App;
