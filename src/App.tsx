import "./App.css";
import {BrowserRouter} from "react-router-dom";
import Routes from "./Router/Routes";
import AuthProvider from "./Context/AuthProvider";

function App() {
  return (
    <BrowserRouter basename={import.meta.env.VITE_APP_BASE_NAME || ""}>
      <AuthProvider>
        <Routes />
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
