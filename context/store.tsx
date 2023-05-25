"use client";

import {
  createContext,
  useContext,
  Dispatch,
  SetStateAction,
  useState,
} from "react";

const GlobalContext = createContext({
  position: 2,
  setPosition: (number: number) => number,
});

export const GlobalContextProvider = ({ children }) => {
  const [position, setPosition] = useState(2);

  return (
    <GlobalContext.Provider value={{ position, setPosition }}>
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => useContext(GlobalContext);
