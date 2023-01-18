import { createContext, useContext, useState } from "react";
const UserContext = createContext();
export const UserProvider = ({ children }) => {
  const [userName, setUserName] = useState(localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user") ): {} );
  const [isLoggedin, setIsLoggedin] = useState(localStorage.getItem("logged") ? localStorage.getItem("logged") : false  );
  const values = { userName, setUserName, isLoggedin, setIsLoggedin };
  return <UserContext.Provider value={values}>{children}</UserContext.Provider>;
};

export const useUser = () => useContext(UserContext);
