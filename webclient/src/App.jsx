import { Typography } from "@mui/material";

import "./App.css";
import { AppContextProvider } from "./AppContext";
import { useGetAppBody } from "./queries";

import Button from "./components/Button";
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

const TYPE_COMPONENTS = {
  Button: Button,
};

function SduiAppBody() {
  const { data, error, loading } = useGetAppBody();

  if (loading) {
    return <Typography>Loading...</Typography>;
  }

  if (error) {
    return <Typography>An Error Occurred</Typography>;
  }

  return data.items.map(({ __typename, ...rest }, i) => {
    const Component = TYPE_COMPONENTS[__typename];

    return <Component key={i} {...rest} />;
  });
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
