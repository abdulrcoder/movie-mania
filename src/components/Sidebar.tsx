import React from "react";
import { FaHome, FaUser, FaCog, FaHeart } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";

const Sidebar: React.FC = () => {
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path ? "bg-purple-700" : "hover:bg-purple-700";
  };

  return (
    <div className="bg-black h-full w-64 text-white p-4 flex flex-col">
      {/* Sidebar Header */}
      <div className="flex items-center justify-center mb-8">
        <h2 className="text-3xl font-extrabold text-white transform transition-all hover:text-purple-300 hover:scale-110 hover:tracking-wider hover:drop-shadow-xl">
          Movie Mania
        </h2>
      </div>

      {/* Menu Items */}
      <ul className="space-y-6">
        {/* Home */}
        <li>
          <Link
            to="/movies"
            className={`flex items-center gap-4 ${isActive(
              "/movies"
            )} p-3 rounded-md transition-all duration-300`}
          >
            <FaHome size={20} />
            <span className="text-md font-medium">Home</span>
          </Link>
        </li>

        {/* Favorites */}
        <li>
          <Link
            to="/favorites"
            className={`flex items-center gap-4 ${isActive(
              "/favorites"
            )} p-3 rounded-md transition-all duration-300`}
          >
            <FaHeart size={20} />
            <span className="text-md font-medium">Favorites</span>
          </Link>
        </li>

        {/* Profile */}
        <li>
          <Link
            to="/profile"
            className={`flex items-center gap-4 ${isActive(
              "/profile"
            )} p-3 rounded-md transition-all duration-300`}
          >
            <FaUser size={20} />
            <span className="text-md font-medium">Profile</span>
          </Link>
        </li>

        {/* Settings */}
        <li>
          <Link
            to="/settings"
            className={`flex items-center gap-4 ${isActive(
              "/settings"
            )} p-3 rounded-md transition-all duration-300`}
          >
            <FaCog size={20} />
            <span className="text-md font-medium">Settings</span>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
