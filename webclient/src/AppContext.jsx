import { createContext, useContext, useMemo, useState } from "react";
import { gql, useQuery } from "@apollo/client";

const GET_FORECAST = gql`
  query GetForecast {
    forecast {
      text
    }
  }
`;

const DEFAULT = {
  coords: { lat: 40.0588, lng: -105.1981 },
  setCoords: () => {},
  data: undefined,
  loading: false,
  error: undefined,
};

const AppContext = createContext(DEFAULT);

export const useAppContext = () => useContext(AppContext);

export function AppContextProvider(props) {
  const getForecastQuery = useQuery(GET_FORECAST);
  const [coords, setCoords] = useState({ lat: 40.0588, lng: -105.1981 });

  const value = useMemo(
    () => ({
      coords,
      setCoords,
      ...getForecastQuery,
    }),
    [getForecastQuery, coords]
  );

  return <AppContext.Provider value={value} {...props} />;
}
