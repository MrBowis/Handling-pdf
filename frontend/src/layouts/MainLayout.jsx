import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";

const MainLayout = () => {
  return (
    <div className="flex">
      <Sidebar />
      <main className="ml-20 flex-1 min-h-screen  bg-gray-50">
        <Outlet />
      </main>
    </div>
  );
};

export default MainLayout;
