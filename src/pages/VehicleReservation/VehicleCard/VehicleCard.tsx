import { IoMdCall } from "react-icons/io";
import { type IconType } from "react-icons";

interface VehicleCardProps {
  name: string;
  village: string;
  contact: string;
  Icon: IconType;
}

function VehicleCard({ name, village, contact, Icon }: VehicleCardProps) {
  return (
    <div className="grid grid-cols-[60px_1fr_50px] items-center gap-3 w-full p-3 bg-blue-100/60 rounded-xl">
      <div className="flex justify-center">
        <Icon size={40} height={35} />
      </div>

      <div>
        <div>{name}</div>
        <div>{village}</div>
      </div>

      <a href={`tel:${contact}`}>
        <IoMdCall size={30} color="green" />
      </a>
    </div>
  );
}

export default VehicleCard;
