import React from 'react';
import { IoMdCall } from "react-icons/io";

import { type IconType } from "react-icons";


interface VehicleCardProps {
  name: string
  village: string
  contact: string
  Icon: IconType
  // iconSrc: string
}

const VehicleCard: React.FC<VehicleCardProps> = ({ name, village, contact, Icon}) => {
  return (
    <div className="grid grid-cols-[60px_1fr_50px] items-center gap-3 w-full p-3 bg-blue-100/60 rounded-xl">
      <div className="avatar-img flex justify-center">
          <Icon size={40} height={35} />
      </div>
      <div className="content">
        <div className="username">{name}</div>
        <div className="villagename">{village}</div>
      </div>
      <a className="call-icon" href={`tel:${contact}`} >
        <IoMdCall size={30} color="green"/>
      </a>
    </div>
  );
};

export default VehicleCard;
