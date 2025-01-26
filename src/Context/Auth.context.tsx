import { createContext } from "react";

export interface AuthContextProps {
  isLoggedIn: boolean;
  doLogin: (userName: string, contractPassword: string) => void;
  doLogout: () => void;
  resetErrorMessage: () => void;
  errorMessage: string | undefined;
}

export const AuthContext = createContext<AuthContextProps>({
  isLoggedIn: false,
  doLogin: () => {
    return;
  },
  doLogout: () => undefined,
  resetErrorMessage: () => undefined,
  errorMessage: undefined,
});
