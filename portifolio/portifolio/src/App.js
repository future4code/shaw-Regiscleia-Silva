
import './App.css';
import { ChakraProvider } from '@chakra-ui/react'
import { PaginaPrincipal } from './PaginaPrincipal';

function App() {
  return (
    <div>
 <ChakraProvider>
  <PaginaPrincipal/>
 </ChakraProvider>
    </div>
     
  );
}

export default App;
