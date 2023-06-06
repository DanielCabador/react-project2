import { Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import Contact from "./component/Contact";
import Navbar from "./component/Navbar/Navbar";
import About from "./component/About/About";
import { Layout } from "./Layout";
import Footer from "./component/Footer/Footer";
const App = () => {
  return (
    <div className="app-container">
      <Navbar />
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
