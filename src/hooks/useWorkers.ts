// hooks/useWorkers.ts
import { useEffect, useMemo, useState } from "react";
import { fetchWorkers, type Worker } from "../services/workersService";
import { useGoogleSheet } from "./useGoogleSheet";
import { workersFinderSchema } from "@/pages/WorkersFinder/workersFinder.schema";

export function useWorkers() {
  const [selectedOccupation, setSelectedOccupation] = useState("all");

  const sheetId = "1zeaDjkbOtWjIxLx-YxZKHA0b1mSuSZsd2mgcw5C_5Pk";
  const { data, loading, error } = useGoogleSheet(
    sheetId,
    "0",
    workersFinderSchema.parsers,
  );

  const occupations = useMemo(() => {
    const fdata = data.filter((d) => d.occupation !== null);
    const set = new Set(fdata.map((w) => w.occupation));
    return ["all", ...set];
  }, [data]);

  
  const filtered = useMemo(() => {
    if (selectedOccupation === "all") return data;
    return data.filter((w) => w.occupation === selectedOccupation);
  }, [data, selectedOccupation]);

  return {
    data,
    occupations,
    filtered,
    selectedOccupation,
    setSelectedOccupation,
    loading,
    error,
  };
}
