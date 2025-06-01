// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import WatermarkPage from "./pages/WatermarkPage";
import EnumeratePage from "./pages/EnumeratePage";
import MergePage from "./pages/MergePage";
import SplitPage from "./pages/SplitPage";
import SecurityPage from "./pages/SecurityPage";

const Home = () => <div className="ml-20 p-4">Página de inicio</div>;
const About = () => <div className="ml-20 p-4">Acerca de</div>;

function App() {
  return (
    <Router>
      <Sidebar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/watermark" element={<WatermarkPage />} />
        <Route path="/split" element={<SplitPage />} />
        <Route path="/merge" element={<MergePage />} />
        <Route path="/enumerate" element={<EnumeratePage />} />
        <Route path="/security" element={<SecurityPage />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
