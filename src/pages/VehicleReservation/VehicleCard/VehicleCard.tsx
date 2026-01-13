import React from "react";
import { type IconType } from "react-icons";
import { IoMdCall } from "react-icons/io";

interface VehicleCardProps {
  name: string;
  village: string;
  contact: string;
  Icon: IconType | React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
}

function VehicleCard({ name, village, contact, Icon }: VehicleCardProps) {
  return (
    <div className="grid grid-cols-[60px_1fr_50px] items-center gap-3 w-full p-3 bg-blue-100/60 rounded-xl">
      <div className="flex justify-center">
        <Icon size={40} height={35} />
      </div>

      <div>
        <div className="font-semibold text-blue-700/80">{name}</div>
        <div className="text-gray-500 text-sm">{village}</div>
      </div>

      <a href={`tel:${contact}`}>
        <IoMdCall size={30} color="#269D54" />
      </a>
    </div>
  );
}

export default VehicleCard;
