import { useContext } from "react";
import AuthPage from "../Pages/AuthPage";
import { Path } from "./paths";
import { Navigate, Routes as ReactRoutes, Route } from "react-router-dom";
import { AuthContext } from "../Context/Auth.context";
import MainPage from "../Pages/MainPage";

export const Routes = () => {
  const { isLoggedIn } = useContext(AuthContext);

  console.log(isLoggedIn);
  const NavigateToLoginPage = <Navigate to={`../../${Path.AuthPage}`} />;
  return (
    <ReactRoutes>
      <Route path={Path.AuthPage} element={<AuthPage />} />
      <Route
        path={Path.MainPage}
        element={isLoggedIn ? <MainPage /> : NavigateToLoginPage}
      />
    </ReactRoutes>
  );
};

export default Routes;
