import AutoIcon from "./assets/auto-rickshaw.svg?react";
import BoleroIcon from "./assets/bolero.svg?react";
import CarIcon from "./assets/car.svg?react";
import TravellerIcon from "./assets/traveller.svg?react";

import {
  FaShuttleVan,
  FaBus,
  FaTractor,
  FaTruckPickup,
  FaTruck,
} from "react-icons/fa";

// export type VehicleTypes = "passengerauto" | "car" | "bolero" | "van" | "traveller" | "pickup" | "minitruck" | "tractor";
export const allowedVehicleTypesArray = [
  "passengerauto",
  "car",
  "bolero",
  "van",
  "traveller",
  "pickup",
  "minitruck",
  "tractor",
] as const;

export type VehicleTypes = (typeof allowedVehicleTypesArray)[number];

export type VehicleCategoryTypes = "passenger" | "commercial";

export interface VehicleInfoType {
  label: string;
  Icon: any;
  category: "passenger" | "commercial";
}

export const vehicleRecords: Record<VehicleTypes, VehicleInfoType> = {
  passengerauto: {
    label: "Passenger Auto",
    Icon: AutoIcon,
    category: "passenger",
  },
  car: {
    label: "Car",
    Icon: CarIcon,
    category: "passenger",
  },
  bolero: {
    label: "Bolero",
    Icon: BoleroIcon,
    category: "passenger",
  },
  van: {
    label: "Van",
    Icon: FaShuttleVan,
    category: "passenger",
  },
  traveller: {
    label: "Traveller",
    Icon: TravellerIcon,
    category: "passenger",
  },

  pickup: {
    label: "Pick Up",
    Icon: FaTruckPickup,
    category: "commercial",
  },
  tractor: {
    label: "Tractor",
    Icon: FaTractor,
    category: "commercial",
  },
  minitruck: {
    label: "Mini Truck",
    Icon: FaTruck,
    category: "commercial",
  },
};
