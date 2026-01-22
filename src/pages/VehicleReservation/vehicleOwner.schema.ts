import { VEHICLE_IDS, type VehicleId } from "./vehicleTypes";

// const allowedVehicleTypes: VehicleTypes[] = ["van", "car", "tractor"];

export const vehicleOwnerSchema = {
  parsers: {
    timestamp: (v: unknown) => String(v),
    // sl_no: (v: unknown) => Number(v || 0),
    name: (v: unknown) => String(v ?? "").trim(),
    // Keep as string to preserve leading zeros and avoid scientific notation
    mobile_no: (v: unknown) => String(v ?? "").trim(),
    village: (v: unknown) => String(v ?? "").trim() || "Location N/A",
    vehicle_type: (v: unknown): VehicleId | null => {
      const val = String(v ?? "")
        .toLowerCase()
        .trim()
        .replace(" ", "");
      return VEHICLE_IDS.includes(val as VehicleId)
        ? (val as VehicleId)
        : null;
    },
  },
} as const;

export type VehicleOwnerRow = {
  [K in keyof typeof vehicleOwnerSchema.parsers]: ReturnType<
    (typeof vehicleOwnerSchema.parsers)[K]
  >;
};
