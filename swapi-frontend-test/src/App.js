import logo from "./logo.svg";
import "./App.css";
import { useEffect } from "react";
import { useSwapi } from "./providers/Swapi";
import { CharacterList } from "./components/CharacterList";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <CharacterList />
      </header>
    </div>
  );
}

export default App;
