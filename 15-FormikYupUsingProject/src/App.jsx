import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import Header from "./layouts/header";
import SignIn from "./pages/log-in-page";
import SignUpPage from "./pages/sign-up-page";
import UsersPage from "./pages/users-pages";

function App() {
  return (
    <main className="App">
      <BrowserRouter>
        <ChakraProvider>
          <Header />
          <Routes>
            <Route path="/" element={<SignIn />}></Route>
            <Route path="/signin" element={<SignIn />}></Route>
            <Route path="/signup" element={<SignUpPage />}></Route>
            <Route path="/users" element={<UsersPage />}></Route>
          </Routes>
        </ChakraProvider>
      </BrowserRouter>
    </main>
  );
}

export default App;
