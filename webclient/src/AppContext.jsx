import { createContext, useContext, useMemo } from "react";

import { useGetAppBody } from "./queries";

const DEFAULT = {
  coords: { lat: 40.0588, lng: -105.1981 },
  setCoords: () => {},
  appData: undefined,
  loading: false,
  error: undefined,
};

const AppContext = createContext(DEFAULT);

export const useAppContext = () => useContext(AppContext);

export function AppContextProvider(props) {
  const { data: { app: appData } = {}, error, loading } = useGetAppBody();

  const value = useMemo(
    () => ({
      appData,
      error,
      loading,
    }),
    [appData, error, loading]
  );

  return <AppContext.Provider value={value} {...props} />;
}
