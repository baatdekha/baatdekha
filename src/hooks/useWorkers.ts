// hooks/useWorkers.ts
import { useEffect, useMemo, useState } from "react";
import { fetchWorkers, type Worker } from "../services/workersService";

export function useWorkers() {
  const [workers, setWorkers] = useState<Worker[]>([]);
  const [selectedOccupation, setSelectedOccupation] = useState("all");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const load = async () => {
      try {
        const data = await fetchWorkers();
        console.log(data)
        setWorkers(data);
      } catch (err) {
        setError("Failed to load workers");
      }
      setLoading(false);
    };

    load();
  }, []);

  const occupations = useMemo(() => {
    const set = new Set(workers.map(w => w.occupation));
    return ["all", ...set];
  }, [workers]);

  const filtered = useMemo(() => {
    if (selectedOccupation === "all") return workers;
    return workers.filter(w => w.occupation === selectedOccupation);
  }, [workers, selectedOccupation]);

  return {
    workers,
    occupations,
    filtered,
    selectedOccupation,
    setSelectedOccupation,
    loading,
    error,
  };
}
