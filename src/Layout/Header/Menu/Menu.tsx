import React, { useEffect, useRef } from "react";
import { MenuItem } from "./MenuItem";
import { type MenuProps } from "./types";

export const Menu: React.FC<MenuProps> = ({ isOpen, onClose, items }) => {
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (
        isOpen &&
        menuRef.current &&
        !menuRef.current.contains(e.target as Node)
      )
        onClose();
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [isOpen, onClose]);

  return (
    <>
      {/* Soft Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-black/20 backdrop-blur-[2px] transition-opacity duration-500 ${
          isOpen
            ? "opacity-100 visible"
            : "opacity-0 invisible pointer-events-none"
        }`}
      />

      {/* Top Slide-Down Panel */}
      <div
        ref={menuRef}
        className={`
          fixed top-0 left-0 right-0 z-50 
          bg-white/95 backdrop-blur-lg shadow-2xl rounded-b-3xl
          transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]
          ${isOpen ? "translate-y-0" : "-translate-y-full"}
        `}
      >
        <div className="max-w-5xl pt-16 mx-auto overflow-hidden">
          {/* The List: Mobile 1 col, Desktop 2 col to save height */}
          <nav className="grid grid-cols-1 md:grid-cols-2 gap-x-8 px-4 pb-10">
            {items.map((item) => (
              <div
                key={item.id}
                className="border-b border-gray-50 last:border-0 md:nth-last-[-n+2]:border-0"
              >
                <MenuItem item={item} onClick={onClose} />
              </div>
            ))}
          </nav>

          {/* Decorative Drag Handle */}
          <div className="flex justify-center pb-3">
            <div className="w-12 h-1 bg-gray-200 rounded-full" />
          </div>
        </div>
      </div>
    </>
  );
};
