import React, { useEffect, useState, createContext } from "react";
import { isLogin as isLoggedIn } from "utils/auth";

// This context help auth state
// Act as a global context and attached to root component
export const AuthContext = createContext(null);

export const AuthContextProvider = (props) => {
  const [isLogin, setIsLogin] = useState(false);

  // For now this useEffect only check through the cookie value
  useEffect(() => {
    if (isLoggedIn()) {
      setIsLogin(true);
    } else {
      setIsLogin(false);
    }
  }, []);

  return (
    <AuthContext.Provider
      value={{
        isLogin,
        setIsLogin
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
}