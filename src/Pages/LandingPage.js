import { Route, Routes, Link } from "react-router-dom";
import AboutMePage from "./landingPage/About Me";
import CatFacts from "./landingPage/Cat Facts";
import MyStuff from "./landingPage/My Stuff";
import Random from "./landingPage/Random";

export default function app() {
  return (
    <div>
      <nav>
        <Link to="/about-me" className="navBtn">
          About me
        </Link>
        <Link to="/cat-facts" className="navBtn">
          Cat Facts
        </Link>
        <Link to="/my-stuff" className="navBtn">
          My stuff
        </Link>
        <Link to="/random" className="navBtn">
          Random
        </Link>
      </nav>
      <Routes>
        <Route path="/about-me" element={<AboutMePage />} />
        <Route path="/cat-facts" element={<CatFacts />} />
        <Route path="/my-stuff" element={<MyStuff />} />
        <Route path="/random" element={<Random />} />
      </Routes>
    </div>
  );
}
