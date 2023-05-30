import "bootstrap/dist/css/bootstrap.css";
import LandingPage from "./LandingPage";
import NewUpdate from "./component/NewUpdate";
import Graphs from "./component/Graphs";
import Contact from "./component/Contact";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <div className="app-container">
      <LandingPage />
      <Routes>
        <Route path="/newupdate" element={<NewUpdate />} />
        <Route path="/graphs" element={<Graphs />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
};

export default App;
