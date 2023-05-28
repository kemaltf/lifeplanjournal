import { createContext, useContext, useState } from "react";

const OverlayStatusContext = createContext({});

export const useOverlayStatus = () => {
  return useContext(OverlayStatusContext);
};

export const OverlayStatusProvider = ({ children }) => {
  const [overlayStatus, setOverlayStatus] = useState(false);
  return <OverlayStatusContext.Provider value={{ overlayStatus, setOverlayStatus }}>{children}</OverlayStatusContext.Provider>;
};

export default OverlayStatusProvider;
