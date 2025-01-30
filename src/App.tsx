import { HashRouter } from "react-router-dom";
import Routes from "./Router/Routes";
import AuthProvider from "./Context/AuthProvider";

function App() {
  return (
    <HashRouter basename={import.meta.env.VITE_APP_BASE_NAME || ""}>
      <AuthProvider>
        <Routes />
      </AuthProvider>
    </HashRouter>
  );
}

export default App;
