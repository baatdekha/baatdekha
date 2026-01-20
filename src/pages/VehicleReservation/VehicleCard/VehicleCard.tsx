import React from "react";
import { type IconType } from "react-icons";
import { MdCall } from "react-icons/md";
import { VEHICLE_REGISTRY, type VehicleId } from "../vehicleTypes";

interface VehicleCardProps {
  name: string;
  village: string;
  contact: string;
  Icon: IconType | React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  vehicle_type: VehicleId;
}

export default function VehicleCard({
  name,
  village,
  contact,
  vehicle_type,
}: VehicleCardProps) {
  const meta = VEHICLE_REGISTRY[vehicle_type];

  if (!meta) return null;

  return (
    <div className="flex items-center gap-3 w-full p-3 bg-white border border-slate-100 rounded-2xl shadow-sm active:scale-[0.98] transition-transform">
      {/* Icon Box */}
      <div className="shrink-0 flex items-center justify-center w-16 h-16 bg-slate-50 rounded-2xl">
        <meta.Icon
          size={40}
          height={45}
          className="w-auto max-h-[35px] object-contain opacity-90"
        />
      </div>

      {/* Info Section */}
      <div className="grow min-w-0">
        <h3 className="font-bold text-slate-800 text-base leading-tight truncate">
          {name}
        </h3>

        <div className="flex items-center gap-2 mt-1.5">
          <span className="text-[11px] font-bold text-slate-400 uppercase tracking-tight truncate max-w-20">
            {village}
          </span>

          <span className="w-1 h-1 bg-slate-200 rounded-full"></span>

          {/* Badge colors come directly from the Registry */}
          <span
            className={`px-2 py-0.5 ${meta.bg} ${meta.text} text-[10px] font-extrabold rounded-md uppercase whitespace-nowrap`}
          >
            {meta.label}
          </span>
        </div>
      </div>

      {/* Modern Call Button */}
      <a
        href={`tel:${contact}`}
        className="shrink-0 flex items-center justify-center w-11 h-11 bg-green-500 text-white rounded-full shadow-lg shadow-green-100 active:bg-green-600 transition-colors"
      >
        <MdCall size={20} />
      </a>
    </div>
  );
}
