import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Routes from "./Router/Routes";

function App() {
  return (
    <BrowserRouter basename={import.meta.env.VITE_APP_BASE_NAME || ""}>
      <Routes />
    </BrowserRouter>
  );
}

export default App;
