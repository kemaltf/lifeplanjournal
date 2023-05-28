import { createContext, useContext, useState } from "react";

const UserPositionContext = createContext({});

export const useUserPosition = () => {
  return useContext(UserPositionContext);
};

export const UserPositionProvider = ({ children }) => {
  const [userPosition, setUserPosition] = useState(0);
  return <UserPositionContext.Provider value={{ userPosition, setUserPosition }}>{children}</UserPositionContext.Provider>;
};

export default UserPositionProvider;
