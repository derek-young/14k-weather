import { createContext, useContext, useMemo, useState } from "react";

import useGetForecast from "./queries/useGetForecast";

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
  const { data, error, loading } = useGetForecast();
  const [coords, setCoords] = useState({ lat: 40.0588, lng: -105.1981 });

  const value = useMemo(
    () => ({
      coords,
      setCoords,
      data,
      error,
      loading,
    }),
    [coords, data, error, loading]
  );

  return <AppContext.Provider value={value} {...props} />;
}
