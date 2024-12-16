import { createContext, useState, useContext } from "react";

// Crea el contexto
const MainContext = createContext();

// Proveedor del contexto
export const MainContextProvider = ({ children }) => {
  const [neightbourhood, setNeightbourhood] = useState({
    selected:false,
    neightbourhoods: [],
  });

  return (
    <MainContext.Provider value={{neightbourhood, setNeightbourhood}}>
      {children}
    </MainContext.Provider>
  );
};

// Hook para usar el contexto
export const useMainContext = () => useContext(MainContext);
