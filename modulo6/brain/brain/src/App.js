import "./App.css";
import { ChakraProvider } from "@chakra-ui/react";
import { Router } from "./routes/Router";
import GlobalState from "./global/GlobalState";
import { Headers } from "../src/pages/Headers";

function App() {
  return (
    <div>
      <GlobalState>
        <ChakraProvider>
          <Router />
        </ChakraProvider>
      </GlobalState>
    </div>
  );
}

export default App;
