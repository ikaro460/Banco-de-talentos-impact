import "./App.css";
import RoutesComponent from "./routes";
import GlobalStyle from "./styles/global";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <GlobalStyle />
        <RoutesComponent />
      </header>
    </div>
  );
}

export default App;
