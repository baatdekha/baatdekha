// vehicleOwner.schema.ts
import type { VehicleTypes } from "./vehicleTypes";

// allowed vehicle types
const allowedVehicleTypes: VehicleTypes[] = ["van", "car", "tractor"];

export const vehicleOwnerSchema = {
  parsers: {
    sl_no: (v: unknown) => Number(v),
    name: (v: unknown) => String(v ?? ""),
    village: (v: unknown) => String(v ?? ""),
    vehicle_type: (v: unknown): VehicleTypes | null => {
      if (typeof v !== "string") return null;

      const val = v.trim().toLowerCase();
      return allowedVehicleTypes.includes(val as VehicleTypes) ? (val as VehicleTypes) : null;
    },
    mobile_no: (v: unknown) => Number(v),
  },
} as const;

// derive row type automatically
export type VehicleOwnerRow = {
  [K in keyof typeof vehicleOwnerSchema.parsers]:
    ReturnType<(typeof vehicleOwnerSchema.parsers)[K]>
};

// derive column order automatically
export const vehicleOwnerColumns = Object.keys(vehicleOwnerSchema.parsers) as readonly (keyof VehicleOwnerRow)[];
