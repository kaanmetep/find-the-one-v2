import { useState, createContext } from "react";

const AppContext = createContext();

function AppProvider({ children }) {
  const [isLoginPopUpOpen, setIsLoginPopUpOpen] = useState(false);
  return (
    <AppContext.Provider value={{ isLoginPopUpOpen, setIsLoginPopUpOpen }}>
      {children}
    </AppContext.Provider>
  );
}

export { AppProvider, AppContext };
