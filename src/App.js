import "./App.css";
import LandingPage from "./Pages/LandingPage.js";
import { useState } from "react";
import { HashRouter } from "react-router-dom";
import { CounterContext } from "./ContextState/CounterContext";

function App() {
  const [count, setCount] = useState(0);

  return (
    <HashRouter>
      <CounterContext.Provider value={{ count, setCount }}>
        <LandingPage />
      </CounterContext.Provider>
    </HashRouter>
  );
}

export default App;
