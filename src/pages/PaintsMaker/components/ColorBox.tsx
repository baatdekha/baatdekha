import type { Shade } from "../types";

interface ColorBoxProps {
  shade: Shade;
  onClick: () => void;
}

export const ColorBox: React.FC<ColorBoxProps> = ({ shade, onClick }) => (
  <button
    onClick={onClick}
    className="group relative flex flex-col items-center"
  >
    <div 
      className="w-full aspect-square rounded-xl shadow-sm group-hover:shadow-md group-hover:-translate-y-1 transition-all duration-200"
      style={{ backgroundColor: shade.shadeHexCode }}
    />
    <span className="text-[10px] font-medium text-gray-600 opacity-0 group-hover:opacity-100 transition-opacity hidden">
      {shade.entityName}
    </span>
  </button>
);
