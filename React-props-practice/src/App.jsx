import "./App.css";
import axios from "axios";
import { useEffect, useState } from "react";
import List from "./components/list";

function App() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((result) => result.data)
      .then((data) => setArticles(data))
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="App">
      <List articles={articles} />
    </div>
  );
}

export default App;
