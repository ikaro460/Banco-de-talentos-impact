import logo from "./logo.svg";
import "./App.css";
import { CharacterList } from "./components/CharacterList";
import { PageBar } from "./components/PageBar";
import { SearchBar } from "./components/SearchBar";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <PageBar />
        <SearchBar />
        <CharacterList />
      </header>
    </div>
  );
}

export default App;
