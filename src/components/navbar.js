import { Route, Routes, NavLink } from "react-router-dom";
import AboutMePage from "../Pages/landingPage/About Me";
import CatFacts from "../Pages/landingPage/Cat Facts";
import HomePage from "../Pages/landingPage/HomePage";
import MyStuff from "../Pages/landingPage/My Stuff";
import ErrorPage from "../Pages/landingPage/ErrorPage";
import CatFacts2 from "../Pages/landingPage/cat fact 2";
import CounterContextPage from "../Pages/landingPage/CounterContext";

const Navbar = () => {
  return (
    <div>
      <nav>
        <NavLink
          to="/"
          end
          className={({ isActive }) => (isActive ? "activeStyle" : "navBtn")}
        >
          HomePage
        </NavLink>
        <NavLink
          to="/about-me"
          end
          className={({ isActive }) => (isActive ? "activeStyle" : "navBtn")}
        >
          About me
        </NavLink>
        <NavLink
          to="/cat-facts"
          className={({ isActive }) => (isActive ? "activeStyle" : "navBtn")}
        >
          Cat Facts
        </NavLink>
        <NavLink
          to="/catfact2"
          className={({ isActive }) => (isActive ? "activeStyle" : "navBtn")}
        >
          Cat Facts 2
        </NavLink>
        <NavLink
          to="/my-stuff"
          className={({ isActive }) => (isActive ? "activeStyle" : "navBtn")}
        >
          My stuff
        </NavLink>
        <NavLink
          to="/counter"
          className={({ isActive }) => (isActive ? "activeStyle" : "navBtn")}
        >
          Counter
        </NavLink>
      </nav>
      <Routes>
        <Route path="*" element={<ErrorPage />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/About-me" element={<AboutMePage />} />
        <Route path="/cat-facts" element={<CatFacts />} />
        <Route path="/catfact2" element={<CatFacts2 />} />
        <Route path="/my-stuff" element={<MyStuff />} />
        <Route path="/counter" element={<CounterContextPage />} />
      </Routes>
    </div>
  );
};

export default Navbar;
