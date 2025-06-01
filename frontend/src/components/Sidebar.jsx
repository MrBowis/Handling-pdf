// src/components/Sidebar.jsx
import { Link, useLocation } from "react-router-dom";
import {
  Home,
  Droplet,
  Scissors,
  ListOrdered,
  Lock,
  Info,
  Layers,
} from "lucide-react";

const Sidebar = () => {
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  const navClasses = (path) =>
    `p-3 rounded-full hover:bg-gray-300 transition-all ${
      isActive(path) ? "bg-gray-400 text-white" : ""
    }`;

  return (
    <aside className="fixed top-0 left-0 h-screen w-20 bg-gray-200 shadow-lg flex flex-col items-center justify-between py-4 rounded-r-2xl">
      {/* Top - Home */}
      <div className="flex flex-col items-center">
        <Link to="/" className={`${navClasses("/")}`}>
          <Home className="text-2xl" />
        </Link>
      </div>

      {/* Center - 5 main actions */}
      <div className="flex flex-col items-center space-y-6">
        <Link to="/watermark" className={navClasses("/watermark")}>
          <Droplet className="text-2xl" />
        </Link>
        <Link to="/split" className={navClasses("/split")}>
          <Scissors className="text-2xl" />
        </Link>
        <Link to="/merge" className={navClasses("/merge")}>
          <Layers className="text-2xl" />
        </Link>
        <Link to="/number" className={navClasses("/number")}>
          <ListOrdered className="text-2xl" />
        </Link>
        <Link to="/security" className={navClasses("/security")}>
          <Lock className="text-2xl" />
        </Link>
      </div>

      {/* Bottom - Info */}
      <div className="flex flex-col items-center">
        <Link to="/about" className={navClasses("/about")}>
          <Info className="text-2xl" />
        </Link>
      </div>
    </aside>
  );
};

export default Sidebar;
