import { Typography } from "@mui/material";
import "./App.css";
import { AppContextProvider, useAppContext } from "./AppContext";
import LookupForm from "./components/LookupForm";

function AppBody() {
  const { data, error, loading } = useAppContext();

  return (
    <div className="App-body">
      <LookupForm />
      <Typography sx={{ margin: 4 }} variant="h3">
        Temperature in 80301:
      </Typography>
      <Typography variant="h5">
        {loading
          ? "Loading..."
          : error
          ? "Error fetching forecast"
          : data.forecast.text}
      </Typography>
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
