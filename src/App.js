import "./App.css";
import { HashRouter } from "react-router-dom";
import LandingPage from "./Pages/LandingPage";

function App() {
  return (
    <HashRouter>
      <div>
        <LandingPage />
      </div>
    </HashRouter>
  );
}

export default App;
