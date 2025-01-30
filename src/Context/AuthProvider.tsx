import { AuthContext } from "./Auth.context";
import React, { useState } from "react";
import { verifyPassword } from "../helper/verifyPassword";

interface AuthProviderProps {
  children: React.ReactNode;
}

const AuthProvider = ({ children }: AuthProviderProps) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [errorMessage, setErrorMessage] = useState(false);

  const login = (contractPassword: string) => {
    if (verifyPassword(contractPassword)) {
      setIsLoggedIn(true);
      setErrorMessage(false);
      return true;
    }
    setErrorMessage(true);
    return false;
  };

  const logout = () => {
    setIsLoggedIn(false);
  };

  const resetErrorMessage = () => {
    setErrorMessage(false);
  };

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn,
        doLogin: login,
        doLogout: logout,
        resetErrorMessage,
        errorMessage,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
export default AuthProvider;
