// components/WorkersFinder/WorkersFinder.tsx
import { RadioToolbar } from "@/components/RadioToolbar";
import { useGoogleSheet } from "@/hooks/useGoogleSheet";
import { useMemo, useState } from "react";
import { FaFilter } from "react-icons/fa";
import SearchBar from "../VehicleReservation/SearchBar";
import WorkerCard from "./WorkerCard/WorkerCard";
import { WorkerSignupCTA } from "./WorkerSignupCTA.tsx";
import { workersFinderSchema } from "./workersFinder.schema";

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
      .replaceAll(" ", "-");
    // .replace(/[^a-z0-9]+/g, "-")
    // .replace(/-+/g, "-")
    // .replace(/^-|-$/g, "");

    return `images/${safe}.jpg`;
  }

  // pages/Home.tsx

  if (error)
    return (
      <div className="flex justify-center items-center min-h-screen text-red-500">
        <p className="font-bold">{error.message}</p>
      </div>
    );

  return (
    <div className="flex flex-col items-center bg-gray-50 min-h-screen font-poppins pb-10">
      {/* 1. STICKY HEADER SECTION */}
      <header className="w-full bg-white shadow-sm pt-6 pb-4 px-4 sticky top-0 z-30 border-b border-gray-100">
        <div className="max-w-xl mx-auto">
          <h1 className="text-2xl font-extrabold text-slate-800 tracking-tight">
            Find Local <span className="text-orange-500">Experts</span>
          </h1>
          <p className="text-[10px] sm:text-xs text-slate-400 font-bold uppercase tracking-widest mt-1 italic">
            Plumber • Welder • Electrician • Painter • Mason • Labor • Carpenter
            • Driver
          </p>
        </div>
      </header>

      <main className="w-full max-w-xl px-4">
        {/* 2. REGISTRATION SECTION */}
        <div className="my-6">
          <WorkerSignupCTA />
        </div>

        {/* 3. FILTER & SEARCH SECTION */}
        <div className="bg-white rounded-2xl shadow-md border border-gray-100 p-4 mb-6">
          <label className="flex items-center gap-2 font-bold text-gray-700 mb-3 text-md">
            <FaFilter className="text-gray-600" />
            Filter by Occupation
          </label>

          {/* Original RadioToolbar */}
          <div className="overflow-x-auto py-1 mb-4">
            <RadioToolbar
              name="occupations"
              options={occupations.map((o) => ({ value: o, label: o }))}
              value={selectedOccupation}
              onChange={setSelectedOccupation}
              accent="blue"
            />
          </div>

          {/* Search Bar placed AFTER RadioToolbar as requested */}
          <div className="pt-2 border-t border-gray-50">
            <SearchBar
              onSearch={setSearchQuery}
              placeholder="Search for a name..."
              className="w-full"
            />
          </div>
        </div>

        {/* 4. RESULTS GRID (2 COLUMNS) */}
        <section>
          {!loading && (
            <div className="flex justify-between items-center mb-4 px-1">
              <h2 className="font-bold text-gray-800 capitalize text-lg">
                {selectedOccupation || "All Services"}
              </h2>
              <span className="text-xs font-semibold bg-orange-100 text-orange-600 px-3 py-1 rounded-full">
                {visibleWorkers.length} Found
              </span>
            </div>
          )}

          {loading ? (
            <div className="grid grid-cols-2 gap-3">
              {[1, 2, 3, 4].map((n) => (
                <div
                  key={n}
                  className="animate-skeleton-shimmer aspect-[4/5] rounded-2xl"
                />
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              {visibleWorkers.length > 0 ? (
                visibleWorkers.map(
                  (worker) =>
                    worker.occupation !== null && (
                      <WorkerCard
                        key={worker.name}
                        {...worker}
                        imgSrc={getImgSrcFromName(worker.name)}
                      />
                    ),
                )
              ) : (
                <div className="col-span-2 text-center py-20 bg-white rounded-2xl border border-dashed border-gray-200">
                  <p className="text-gray-400 font-medium italic text-sm">
                    No workers found in this category.
                  </p>
                </div>
              )}
            </div>
          )}
        </section>
      </main>
    </div>
  );
}
