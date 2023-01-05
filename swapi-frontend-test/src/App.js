import logo from "./logo.svg";
import "./App.css";
import { CharacterList } from "./components/CharacterList";
import { PageBar } from "./components/PageBar";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <PageBar />
        <CharacterList />
      </header>
    </div>
  );
}

export default App;
