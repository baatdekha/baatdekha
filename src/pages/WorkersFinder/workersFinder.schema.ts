import { OCCUPATION_IDS, type OccupationId } from "./workerTypes";

export const workersFinderSchema = {
  parsers: {
    sl_no: (v: unknown) => Number(v || 0),
    name: (v: unknown) => String(v ?? "").trim(),
    mobile_no: (v: unknown) => String(v ?? "").trim(),
    village: (v: unknown) => String(v ?? "").trim() || "Location N/A",
    occupation: (v: unknown) => String(v),
    /*OccupationId | null => {
      const val = String(v ?? "")
        .toLowerCase()
        .trim();
      return OCCUPATION_IDS.includes(val as OccupationId)
        ? (val as OccupationId)
        : null;
    },*/
  },
};

export type WorkerRow = {
  [K in keyof typeof workersFinderSchema.parsers]: ReturnType<
    (typeof workersFinderSchema.parsers)[K]
  >;
};
