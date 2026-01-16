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
