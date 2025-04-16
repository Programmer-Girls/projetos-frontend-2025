import "./App.css";
import "./Styles/App.scss";
import Header from "./Components/Header";
import Acompanhamentos from "./Components/Acompanhamentos";
import Cafes from "./Components/Cafes";

function App() {
  return (
    <div className="App">
      <Header />
      <Cafes  />
      <Acompanhamentos />
    </div>
  );
}

export default App;
