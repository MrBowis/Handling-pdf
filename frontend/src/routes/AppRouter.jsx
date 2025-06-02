// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import WatermarkPage from "../pages/WatermarkPage";
import SplitPage from "../pages/SplitPage";
import MergePage from "../pages/MergePage";
import EnumeratePage from "../pages/EnumeratePage";
import SecurityPage from "../pages/SecurityPage";
import Home from "../pages/Home";
import MainLayout from "../layouts/MainLayout";
import AboutSection from "../components/AboutSection ";

const About = () => <div className="ml-20 p-4">Acerca de</div>;

function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route path="" element={<Home />} />
          <Route path="watermark" element={<WatermarkPage />} />
          <Route path="split" element={<SplitPage />} />
          <Route path="merge" element={<MergePage />} />
          <Route path="enumerate" element={<EnumeratePage />} />
          <Route path="security" element={<SecurityPage />} />
          <Route path="about" element={<AboutSection />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default AppRouter;
