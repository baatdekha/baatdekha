import type React from "react";
import { type IconType } from "react-icons";
import {
    FaShuttleVan,
    FaTractor,
    FaTruck,
    FaTruckPickup
} from "react-icons/fa";
import AutoIcon from "./assets/auto-rickshaw.svg?react";
import BoleroIcon from "./assets/bolero.svg?react";
import BusIcon from "./assets/bus.svg?react";
import CarIcon from "./assets/car.svg?react";
import CommercialAutoIcon from "./assets/commercial_auto.svg?react";
import ErtigaIcon from "./assets/ertiga.svg?react";
import TravellerIcon from "./assets/traveller.svg?react";
/* ---------- Core domain ---------- */

export const VEHICLE_IDS = [
  "passengerauto",
  "commercialauto",
  "car",
  "bolero",
  "van",
  "traveller",
  "pickup",
  "minitruck",
  "tractor",
  "bus",
  "eco-van",
  "ertiga",
] as const;

export type VehicleId = (typeof VEHICLE_IDS)[number];

export type VehicleCategory = "passenger" | "commercial";

/* ---------- UI sentinel extensions ---------- */

export type VehicleIdOrAll = VehicleId | "all";
export type VehicleCategoryOrAll = VehicleCategory | "all";

/* ---------- Metadata ---------- */

export interface VehicleMeta {
  label: string;
  Icon: IconType | React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  category: VehicleCategory;
  bg?: string;
  text?: string;
}

/* ---------- UI option shape ---------- */

export interface VehicleOption {
  value: VehicleIdOrAll;
  label: string;
  Icon: IconType | React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  category: VehicleCategoryOrAll;
}

/* ---------- Registry (single source of truth) ---------- */

export const VEHICLE_REGISTRY: Record<VehicleId, VehicleMeta> = {
  passengerauto: {
    label: "Passenger Auto",
    Icon: AutoIcon,
    category: "passenger",
    bg: "bg-amber-100",
    text: "text-amber-700",
  },
  car: {
    label: "Car",
    Icon: CarIcon,
    category: "passenger",
    bg: "bg-blue-100",
    text: "text-blue-700",
  },
  bolero: {
    label: "Bolero",
    Icon: BoleroIcon,
    category: "passenger",
    bg: "bg-slate-100",
    text: "text-slate-700",
  },
  van: {
    label: "Van",
    Icon: FaShuttleVan,
    category: "passenger",
    bg: "bg-purple-100",
    text: "text-purple-700",
  },
  traveller: {
    label: "Traveller",
    Icon: TravellerIcon,
    category: "passenger",
    bg: "bg-indigo-100",
    text: "text-indigo-700",
  },
  pickup: {
    label: "Pick Up",
    Icon: FaTruckPickup,
    category: "commercial",
    bg: "bg-orange-100",
    text: "text-orange-700",
  },
  tractor: {
    label: "Tractor",
    Icon: FaTractor,
    category: "commercial",
    bg: "bg-red-100",
    text: "text-red-700",
  },
  minitruck: {
    label: "Mini Truck",
    Icon: FaTruck,
    category: "commercial",
    bg: "bg-emerald-100",
    text: "text-emerald-700",
  },
  bus: {
    label: "Bus",
    Icon: BusIcon,
    category: "passenger",
  },
  ertiga: {
    label: "Ertiga",
    Icon: ErtigaIcon,
    category: "passenger"
  },
  "eco-van": {
    label: "Eeco Van",
    Icon: FaShuttleVan,
    category: "passenger"
  },
  commercialauto: {
    label: "Commercial Auto",
    Icon: CommercialAutoIcon,
    category: "commercial"
  }
};
