import type { VehicleId } from "./vehicles.registry";
import type { VehicleUiMeta } from "./vehicles.types";

export const VEHICLE_UI: Partial<
  Record<VehicleId, VehicleUiMeta>
> = {
  passengerauto: {
    bg: "bg-amber-100",
    text: "text-amber-700",
  },
  car: {
    bg: "bg-blue-100",
    text: "text-blue-700",
  },
  bolero: {
    bg: "bg-slate-100",
    text: "text-slate-700",
  },
  van: {
    bg: "bg-purple-100",
    text: "text-purple-700",
  },
  traveller: {
    bg: "bg-indigo-100",
    text: "text-indigo-700",
  },
  pickup: {
    bg: "bg-orange-100",
    text: "text-orange-700",
  },
  tractor: {
    bg: "bg-red-100",
    text: "text-red-700",
  },
  minitruck: {
    bg: "bg-emerald-100",
    text: "text-emerald-700",
  },
};
