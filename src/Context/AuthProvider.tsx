import { AuthContext } from "./Auth.context";
import React, { useState } from "react";
import { verifyPassword } from "../helper/verifyPassword";

interface AuthProviderProps {
  children: React.ReactNode;
}

const AuthProvider = ({ children }: AuthProviderProps) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | undefined>(
    undefined
  );
  const login = (contractPassword: string) => {
    if (!verifyPassword(contractPassword)) {
      setErrorMessage("Please enter the right credentials");
      throw new Error();
    } else {
      setErrorMessage(undefined);
      setIsLoggedIn(true);
    }
  };
  const logout = () => {
    setIsLoggedIn(false);
  };

  const resetErrorMessage = () => {
    setErrorMessage(undefined);
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
