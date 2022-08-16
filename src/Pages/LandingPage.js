import { Route, Routes, NavLink } from "react-router-dom";
import AboutMePage from "./landingPage/About Me";
import CatFacts from "./landingPage/Cat Facts";
import MyStuff from "./landingPage/My Stuff";
import Random from "./landingPage/Random";

export default function app() {
  return (
    <div>
      <nav>
        <NavLink
          to="/"
          end
          className={({ isActive }) =>
            isActive ? "navBtn activeStyle" : "navBtn"
          }
        >
          About me
        </NavLink>
        <NavLink
          to="/cat-facts"
          className={({ isActive }) =>
            isActive ? "navBtn activeStyle" : "navBtn"
          }
        >
          Cat Facts
        </NavLink>
        <NavLink
          to="/my-stuff"
          className={({ isActive }) =>
            isActive ? "navBtn activeStyle" : "navBtn"
          }
        >
          My stuff
        </NavLink>
        <NavLink
          to="/random"
          className={({ isActive }) =>
            isActive ? "navBtn activeStyle" : "navBtn"
          }
        >
          Random
        </NavLink>
      </nav>
      <Routes>
        <Route path="*" element={<h1>ERROR</h1>} />
        <Route path="/" element={<AboutMePage />} />
        <Route path="/cat-facts" element={<CatFacts />} />
        <Route path="/my-stuff" element={<MyStuff />} />
        <Route path="/random" element={<Random />} />
      </Routes>
    </div>
  );
}
