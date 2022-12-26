import "./App.css";
import { ChakraProvider } from "@chakra-ui/react";
import Header from "./layouts/header";
import AllCountries from "./pages/all-countries";
function App() {
  return (
    <div className="App">
      <Header />
      <ChakraProvider>
        <AllCountries />
      </ChakraProvider>
    </div>
  );
}

export default App;
