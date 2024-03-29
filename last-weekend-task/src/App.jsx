import "./App.css";
import Footer from "./layouts/footer";
import Header from "./layouts/header";
import Routing from "./routes";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
  return (
    <main className="App">
      <Header />
      <Routing />
      <Footer />
    </main>
  );
}

export default App;
