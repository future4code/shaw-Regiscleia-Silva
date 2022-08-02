
import './App.css';
import * as React from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import { Headers } from './Headers';


function App() {
  return (
    <ChakraProvider>
      <Headers />
      </ChakraProvider>
  );
}

export default App;
