import { FaShuttleVan, FaTractor, FaTruck, FaTruckPickup } from "react-icons/fa";

import AutoIcon from "../assets/auto-rickshaw.svg?react";
import BoleroIcon from "../assets/bolero.svg?react";
import BusIcon from "../assets/bus.svg?react";
import CarIcon from "../assets/car.svg?react";
import CommercialAutoIcon from "../assets/commercial_auto.svg?react";
import ErtigaIcon from "../assets/ertiga.svg?react";
import TravellerIcon from "../assets/traveller.svg?react";

import type { VehicleMeta } from "./vehicles.types";

export const VEHICLE_REGISTRY = {
  passengerauto: {
    label: "Passenger Auto",
    Icon: AutoIcon,
    category: "passenger",
  },
  commercialauto: {
    label: "Commercial Auto",
    Icon: CommercialAutoIcon,
    category: "commercial",
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
  minitruck: {
    label: "Mini Truck",
    Icon: FaTruck,
    category: "commercial",
  },
  tractor: {
    label: "Tractor",
    Icon: FaTractor,
    category: "commercial",
  },
  bus: {
    label: "Bus",
    Icon: BusIcon,
    category: "passenger",
  },
  ertiga: {
    label: "Ertiga",
    Icon: ErtigaIcon,
    category: "passenger",
  },
  "eco-van": {
    label: "Eeco Van",
    Icon: FaShuttleVan,
    category: "passenger",
  },
} as const satisfies Record<string, VehicleMeta>;

export type VehicleId = keyof typeof VEHICLE_REGISTRY;

export const VEHICLE_IDS = Object.keys(VEHICLE_REGISTRY) as VehicleId[];
