import "./App.css";
import {HashRouter} from "react-router-dom";
import Routes from "./Router/Routes";

function App() {
  return (
    <HashRouter basename={import.meta.env.VITE_APP_BASE_NAME || ""}>
      <Routes />
    </HashRouter>
  );
}

export default App;
