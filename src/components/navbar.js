import { Route, Routes, NavLink } from "react-router-dom";
import AboutMePage from "../Pages/landingPage/About Me";
import CatFacts from "../Pages/landingPage/Cat Facts";
import HomePage from "../Pages/landingPage/HomePage";
import MyStuff from "../Pages/landingPage/My Stuff";
import Random from "../Pages/landingPage/Random";
import ErrorPage from "../Pages/landingPage/ErrorPage";

export default function Navbar() {
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
          to="/my-stuff"
          className={({ isActive }) => (isActive ? "activeStyle" : "navBtn")}
        >
          My stuff
        </NavLink>
        <NavLink
          to="/random"
          className={({ isActive }) => (isActive ? "activeStyle" : "navBtn")}
        >
          Random
        </NavLink>
      </nav>
      <Routes>
        <Route path="*" element={<ErrorPage />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/About-me" element={<AboutMePage />} />
        <Route path="/cat-facts" element={<CatFacts />} />
        <Route path="/my-stuff" element={<MyStuff />} />
        <Route path="/random" element={<Random />} />
      </Routes>
    </div>
  );
}
