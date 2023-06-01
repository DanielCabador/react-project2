import "bootstrap/dist/css/bootstrap.css";
import NewUpdate from "./component/NewUpdate";
import Graphs from "./component/Graphs";
import Contact from "./component/Contact";
import LoginOrSignout from "./loginPage/LoginOrSignout";
import Navbar from "./Navbar";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <div className="app-container">
      <Navbar />
      <Routes>
        <Route path="/newupdate" element={<NewUpdate />} />
        <Route path="/graphs" element={<Graphs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<LoginOrSignout />} />
      </Routes>
    </div>
  );
};

export default App;
