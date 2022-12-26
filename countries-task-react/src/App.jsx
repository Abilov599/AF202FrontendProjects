import "./App.css";
import { ChakraProvider } from "@chakra-ui/react";
import Header from "./layouts/header";
import AllCountries from "./pages/all-countries";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Country from "./pages/country";
function App() {
  return (
    <div className="App">
      <Header />
      <ChakraProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<AllCountries />}></Route>
            <Route path="/country-detail/:name" element={<Country />}></Route>
          </Routes>
        </BrowserRouter>
      </ChakraProvider>
    </div>
  );
}

export default App;
