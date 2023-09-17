import { createContext, useContext, useMemo, useState } from "react";

import { useGetForecast } from "./queries";

const DEFAULT = {
  coords: { lat: "40.0588", lng: "-105.1981" },
  setCoords: () => {},
  forecast: undefined,
  loading: false,
  error: undefined,
};

const ForecastContext = createContext(DEFAULT);

export const useForecastContext = () => useContext(ForecastContext);

export function ForecastContextProvider(props) {
  const [coords, setCoords] = useState({ lat: "40.0588", lng: "-105.1981" });
  const [submittedCoords, setSubmittedCoords] = useState(coords);

  const {
    data: { forecast } = {},
    error,
    loading,
  } = useGetForecast(submittedCoords);

  const value = useMemo(
    () => ({
      coords,
      setCoords,
      forecast,
      error,
      loading,
      updateSubmittedCoords: () => setSubmittedCoords(coords),
    }),
    [coords, forecast, error, loading]
  );

  return <ForecastContext.Provider value={value} {...props} />;
}
