import "./App.css";
import { AppContextProvider } from "./AppContext";
import LookupForm from "./components/LookupForm";
import Results from "./components/Results";

function AppBody() {
  return (
    <div className="App-body">
      <LookupForm />
      <Results />
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <AppContextProvider>
        <AppBody />
      </AppContextProvider>
    </div>
  );
}

export default App;
