import { createContext, useContext, useState, ReactNode } from "react";

interface OverlayStatusProviderProps {
  children: ReactNode;
}
const OverlayStatusContext = createContext<any>({});

export const useOverlayStatus = () => {
  return useContext(OverlayStatusContext);
};

export const OverlayStatusProvider = ({ children }: OverlayStatusProviderProps) => {
  const [overlayStatus, setOverlayStatus] = useState(false);
  return <OverlayStatusContext.Provider value={{ overlayStatus, setOverlayStatus }}>{children}</OverlayStatusContext.Provider>;
};

export default OverlayStatusProvider;
