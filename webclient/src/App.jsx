import { Typography } from "@mui/material";

import "./App.css";
import { AppContextProvider } from "./AppContext";
import { useGetAppBody } from "./queries";

import LookupForm from "./components/LookupForm";
import Results from "./components/Results";

function TraditionalAppBody() {
  return (
    <div className="App-body">
      <LookupForm />
      <Results />
    </div>
  );
}

function SduiAppBody() {
  const { data, error, loading } = useGetAppBody();
  return <div>foo</div>;
}

function App() {
  return (
    <div className="App">
      <AppContextProvider>
        <Typography variant="h5">Traditional Rendering</Typography>
        <TraditionalAppBody />
        <Typography variant="h5">SDUI</Typography>
        <SduiAppBody />
      </AppContextProvider>
    </div>
  );
}

export default App;
