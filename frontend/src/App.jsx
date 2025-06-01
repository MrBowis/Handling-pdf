// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";

const Home = () => <div className="ml-20 p-4">Página de inicio</div>;
const Upload = () => <div className="ml-20 p-4">Subir archivos</div>;
const Files = () => <div className="ml-20 p-4">Lista de archivos</div>;
const Settings = () => <div className="ml-20 p-4">Configuración</div>;
const About = () => <div className="ml-20 p-4">Acerca de</div>;

function App() {
  return (
    <Router>
      <Sidebar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/upload" element={<Upload />} />
        <Route path="/files" element={<Files />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
