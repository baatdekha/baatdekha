import { LuLayoutGrid } from "react-icons/lu";
import { VEHICLE_REGISTRY, type VehicleId } from "./vehicles.registry";
import type { VehicleCategory } from "./vehicles.types";
import { VEHICLE_UI } from "./vehicles.ui";

export type VehicleIdOrAll = VehicleId | "all";
export type VehicleCategoryOrAll = VehicleCategory | "all";

export type VehicleOption = {
  value: VehicleIdOrAll;
  label: string;
  Icon: (typeof VEHICLE_REGISTRY)[VehicleId]["Icon"];
  category: VehicleCategoryOrAll;
  bg: string;
  text: string;
};

const DEFAULT_BG = "bg-neutral-100";
const DEFAULT_TEXT = "text-neutral-700";

export function getVehicleOption(id: VehicleId): VehicleOption {
  const meta = VEHICLE_REGISTRY[id];
  const ui = VEHICLE_UI[id];

  return {
    value: id,
    label: meta.label,
    Icon: meta.Icon,
    category: meta.category,
    bg: ui?.bg ?? DEFAULT_BG,
    text: ui?.text ?? DEFAULT_TEXT,
  };
}

export const VEHICLE_OPTIONS: VehicleOption[] = (
  Object.keys(VEHICLE_REGISTRY) as VehicleId[]
).map(getVehicleOption);

export const VEHICLE_OPTIONS_WITH_ALL: VehicleOption[] = [
  {
    value: "all",
    label: "All",
    Icon: LuLayoutGrid,
    category: "all",
    bg: DEFAULT_BG,
    text: DEFAULT_TEXT,
  },
  ...VEHICLE_OPTIONS,
];
