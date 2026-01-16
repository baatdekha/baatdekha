// components/WorkersFinder/WorkersFinder.tsx
import { RadioToolbar } from "@/components/RadioToolbar";
import { useGoogleSheet } from "@/hooks/useGoogleSheet";
import { useMemo, useState } from "react";
import WorkerCard from "./WorkerCard/WorkerCard";
import { WorkerRegistrationCard } from "./WorkerRegistrationCard";
import { workersFinderSchema } from "./workersFinder.schema";
import SearchBar from "../VehicleReservation/SearchBar";

export default function WorkersFinder() {
  const [selectedOccupation, setSelectedOccupation] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const sheetId = "1zeaDjkbOtWjIxLx-YxZKHA0b1mSuSZsd2mgcw5C_5Pk";

  const { data, loading, error } = useGoogleSheet(
    sheetId,
    "0",
    workersFinderSchema.parsers,
  );

  /****** Filter Data *******/

  const visibleWorkers = useMemo(() => {
    if (!data) return [];

    const query = searchQuery.trim().toLowerCase();

    // Filter by category using RadioToolbar
    return data.filter((v) => {
      const matchesCategory =
        selectedOccupation === "all" || v.occupation === selectedOccupation;

      // Filter by Search 
      const matchesSearch =
        query === "" ||
        v.name.toLowerCase().includes(query) ||
        v.village.toLowerCase().includes(query);

      return matchesCategory && matchesSearch;
    });
  }, [data, selectedOccupation, searchQuery]);

  // Get list of occupations
  const occupations = useMemo(() => {
    const fdata = data.filter((d) => d.occupation !== null);
    const set = new Set(fdata.map((w) => w.occupation));
    return ["all", ...set];
  }, [data]);

  function getImgSrcFromName(name: string): string {
    const safe = name
      // .toLowerCase()
      .replaceAll(" ", "-")
      // .replace(/[^a-z0-9]+/g, "-")
      // .replace(/-+/g, "-")
      // .replace(/^-|-$/g, "");

    return `images/${safe}.jpg`;
  }

  if (error) return <p>{error.message}</p>;

  return (
    <div className="flex flex-col items-center bg-gray-50 max-w-screen font-poppins">
      <h3 className="px-3 italic font-bold m-5 text-center text-orange-500">
        <span>
          Plumber || Welder || Electrician || Painter || Mason || Labor ||
          Carpenter || Driver || Interior designer || Building contractor
        </span>
      </h3>
      <WorkerRegistrationCard />

      <div className="grid grid-cols-1 min-w-0 gap-3 bg-gray-100 py-5">
        <label className="p-2">🔴 Filter by Occupation:</label>

        <RadioToolbar
          name="occupations"
          options={occupations.map((o) => ({ value: o, label: o }))}
          value={selectedOccupation}
          onChange={setSelectedOccupation}
          accent="blue"
        />
      </div>
      <SearchBar onSearch={setSearchQuery} placeholder="Find workers.." />
      {loading ? (
        <p>Loading Workers...</p>
      ) : (
        <div className="flex flex-wrap gap-5 justify-center">
          {visibleWorkers.map(
            (worker) =>
              worker.occupation !== null && (
                <WorkerCard
                  key={worker.name}
                  {...worker}
                  imgSrc={getImgSrcFromName(worker.name)}
                />
              ),
          )}
        </div>
      )}
    </div>
  );
}
