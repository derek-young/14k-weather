import { createContext, useContext, useMemo, useState } from "react";

import { useGetForecast } from "./queries";

const DEFAULT = {
  coords: { lat: 40.0588, lng: -105.1981 },
  setCoords: () => {},
  forecast: undefined,
  loading: false,
  error: undefined,
};

const ForecastContext = createContext(DEFAULT);

export const useForecastContext = () => useContext(ForecastContext);

export function ForecastContextProvider(props) {
  const { data: { forecast } = {}, error, loading } = useGetForecast();
  const [coords, setCoords] = useState({ lat: 40.0588, lng: -105.1981 });

  const value = useMemo(
    () => ({
      coords,
      setCoords,
      forecast,
      error,
      loading,
    }),
    [coords, forecast, error, loading]
  );

  return <ForecastContext.Provider value={value} {...props} />;
}
