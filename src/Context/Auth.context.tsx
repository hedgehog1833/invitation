import { createContext } from "react";

export interface AuthContextProps {
  isLoggedIn: boolean;
  doLogin: (passowrd: string) => boolean;
  doLogout: () => void;
  resetErrorMessage: () => void;
  errorMessage: boolean;
}

export const AuthContext = createContext<AuthContextProps>({
  isLoggedIn: false,
  doLogin: () => {
    return false;
  },
  doLogout: () => undefined,
  resetErrorMessage: () => undefined,
  errorMessage: false,
});
