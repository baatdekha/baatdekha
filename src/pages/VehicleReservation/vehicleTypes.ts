import { type IconType } from "react-icons";
import AutoIcon from "./assets/auto-rickshaw.svg?react";
import BoleroIcon from "./assets/bolero.svg?react";
import CarIcon from "./assets/car.svg?react";
import TravellerIcon from "./assets/traveller.svg?react";

import type React from "react";
import {
    FaShuttleVan,
    FaTractor,
    FaTruck,
    FaTruckPickup,
} from "react-icons/fa";

/* ---------- Core domain ---------- */

export const VEHICLE_IDS = [
  "passengerauto",
  "car",
  "bolero",
  "van",
  "traveller",
  "pickup",
  "minitruck",
  "tractor",
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
  bg: string;
  text: string;
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
};
