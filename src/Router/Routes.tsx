import AuthPage from "../Pages/AuthPage";
import { Path } from "./paths";
import { Routes as ReactRoutes, Route } from "react-router-dom";

export const Routes = () => {
  return (
    <ReactRoutes>
      <Route path={Path.AuthPage} element={<AuthPage />} />
    </ReactRoutes>
  );
};

export default Routes;
