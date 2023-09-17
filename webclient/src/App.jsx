import { Typography } from "@mui/material";

import "./App.css";
import { AppContextProvider, useAppContext } from "./AppContext";

import { LookupForm, SDUILookupForm } from "./components/LookupForm";
import { Results, SDUIResults } from "./components/Results";
import { ForecastContextProvider } from "./ForecastContext";

function AppBody1(props) {
  return <div className="App-body-1" {...props} />;
}

function AppBody2(props) {
  return <div className="App-body-2" {...props} />;
}

const APP_BODY_COMPONENTS = {
  AppBody1: AppBody1,
  AppBody2: AppBody2,
};

function SDUIAppBody() {
  const { appData, error, loading } = useAppContext();

  if (loading) {
    return <Typography>Loading...</Typography>;
  }

  if (error) {
    return <Typography>An Error Occurred</Typography>;
  }

  const AppBody = APP_BODY_COMPONENTS[appData.appBody.__typename];

  return (
    <AppBody>
      <SDUILookupForm />
      <SDUIResults />
    </AppBody>
  );
}

function App() {
  return (
    <AppContextProvider>
      <ForecastContextProvider>
        <div className="App">
          <Typography variant="h5">Traditional Rendering</Typography>
          <AppBody1>
            <LookupForm />
            <Results />
          </AppBody1>
          <Typography variant="h5">SDUI</Typography>
          <SDUIAppBody />
        </div>
      </ForecastContextProvider>
    </AppContextProvider>
  );
}

export default App;
