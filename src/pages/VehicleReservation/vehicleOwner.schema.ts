import { allowedVehicleTypesArray, type VehicleTypes } from "./vehicleTypes";

// const allowedVehicleTypes: VehicleTypes[] = ["van", "car", "tractor"];

export const vehicleOwnerSchema = {
  parsers: {
    sl_no: (v: unknown) => Number(v || 0),
    name: (v: unknown) => String(v ?? "").trim(),
    village: (v: unknown) => String(v ?? "").trim() || "Location N/A",
    vehicle_type: (v: unknown): VehicleTypes | null => {
      const val = String(v ?? "")
        .toLowerCase()
        .trim();
      return allowedVehicleTypesArray.includes(val as VehicleTypes)
        ? (val as VehicleTypes)
        : null;
    },
    // Keep as string to preserve leading zeros and avoid scientific notation
    mobile_no: (v: unknown) => String(v ?? "").trim(),
  },
} as const;

export type VehicleOwnerRow = {
  [K in keyof typeof vehicleOwnerSchema.parsers]: ReturnType<
    (typeof vehicleOwnerSchema.parsers)[K]
  >;
};
