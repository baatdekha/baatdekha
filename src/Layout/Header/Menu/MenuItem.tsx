import React from "react";
import { Link, useLocation } from "react-router-dom";
import { type MenuItemType } from "./types";
import { FiChevronRight } from "react-icons/fi";

interface MenuItemProps {
  item: MenuItemType;
  onClick: () => void;
}

export const MenuItem: React.FC<MenuItemProps> = ({ item, onClick }) => {
  const location = useLocation();
  const { path, label, icon: Icon } = item;
  const isActive = location.pathname === path;

  return (
    <Link
      to={path}
      onClick={onClick}
      className={`
        group flex items-center justify-between px-6 py-2 rounded-xl transition-all duration-200
        ${isActive ? "bg-blue-200/50" : "hover:bg-gray-50"}
      `}
    >
      <div className="flex items-center gap-4">
        <div
          className={`
          p-2 rounded-xl transition-colors
          ${isActive ? "bg-blue-600 text-white" : "bg-gray-200/70 text-gray-500 group-hover:bg-white group-hover:text-blue-600"}
        `}
        >
          <Icon className="text-xl" />
        </div>
        <span
          className={`font-semibold tracking-tight ${isActive ? "text-blue-600" : "text-gray-700"}`}
        >
          {label}
        </span>
      </div>

      <FiChevronRight
        size={24}
        className={`
        transition-all duration-300 
        ${isActive ? "text-blue-600 translate-x-0" : "text-gray-300 -translate-x-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-0"}
      `}
      />
    </Link>
  );
};
