
import './App.css';
import * as React from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import { Headers } from './Headers';
import { Page } from './Page';


function App() {
  return (
    <ChakraProvider>
      <Headers />
      <Page/>
      </ChakraProvider>
  );
}

export default App;
