import { createContext, useContext, useState } from "react";
const UserContext = createContext();
export const UserProvider = ({ children }) => {
  const [userName, setUserName] = useState({});
  const [isLoggedin, setIsLoggedin] = useState(false);
  const values = { userName, setUserName, isLoggedin, setIsLoggedin };
  return <UserContext.Provider value={values}>{children}</UserContext.Provider>;
};

export const useUser = () => useContext(UserContext);
