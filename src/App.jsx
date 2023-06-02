import { Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import Graphs from "./component/Graphs";
import Contact from "./component/Contact";
import Navbar from "./component/Navbar/Navbar";
import About from "./component/About/About";
import HeroPage from "./HeroPage";

const App = () => {
  return (
    <div className="app-container">
      <Navbar />
      <Routes>
        <Route path="/" element={<HeroPage />} />
        <Route path="/graphs" element={<Graphs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
};

export default App;
