import "./App.css";
import LandingPage from "./Pages/LandingPage.js";
import { HashRouter } from "react-router-dom";

function App() {
  return (
    <HashRouter>
      <LandingPage />
    </HashRouter>
  );
}

export default App;
