import { useGoogleSheet } from "@/hooks/useGoogleSheet";
import { useMemo, useState } from "react";
import { FaCircleQuestion } from "react-icons/fa6";
import { LoadingState } from "./LoadingState.tsx";
import { RegisterVehicleCTA } from "./RegisterVehicleCTA.tsx";
import SearchBar from "./SearchBar";
import VehicleCard from "./VehicleCard/VehicleCard";
import VehicleFilter from "./VehicleFilter/VehicleFilter";
import { vehicleOwnerSchema } from "./vehicleOwner.schema";
import {
  VEHICLE_REGISTRY,
  type VehicleCategoryOrAll,
  type VehicleId,
  type VehicleIdOrAll,
} from "./vehicleTypes";

export const VehicleReservation = () => {
  const SHEET_ID = "1Z_QmGSKoEJ9ycIMpvnRv4ZbcKH4rzH-z";

  const { data, loading, error } = useGoogleSheet(
    SHEET_ID,
    "0",
    vehicleOwnerSchema.parsers,
  );

  const [selectedVehicle, setSelectedVehicle] = useState<VehicleIdOrAll>("all");
  const [selectedCategory, setSelectedCategory] =
    useState<VehicleCategoryOrAll>("passenger");
  const [searchQuery, setSearchQuery] = useState("");

  type RawRow = (typeof data)[number];

  function hasValidVehicleType(
    row: RawRow,
  ): row is RawRow & { vehicle_type: VehicleId } {
    return (
      typeof row.vehicle_type === "string" &&
      row.vehicle_type in VEHICLE_REGISTRY
    );
  }
  const visibleVehicles = useMemo(() => {
    if (!data) return [];

    const query = searchQuery.trim().toLowerCase();

    return data.filter(hasValidVehicleType).filter((v) => {
      const meta = VEHICLE_REGISTRY[v.vehicle_type];

      const matchesCategory =
        selectedCategory === "all" || meta.category === selectedCategory;

      const matchesVehicle =
        selectedVehicle === "all" || v.vehicle_type === selectedVehicle;

      const matchesSearch =
        query === "" ||
        v.name.toLowerCase().includes(query) ||
        v.village.toLowerCase().includes(query);

      return matchesCategory && matchesVehicle && matchesSearch;
    });
  }, [data, selectedVehicle, selectedCategory, searchQuery]);
  if (error) return <ErrorState error={error} />;

  return (
    <div className="flex flex-col items-center bg-[#F8FAFC] min-h-screen font-poppins pb-20">
      {/* 1. STICKY HEADER */}
      <header className="w-full bg-white/90 backdrop-blur-md shadow-sm border-b border-slate-200 sticky top-0 z-30 px-4 py-4">
        <div className="max-w-xl mx-auto">
          <h1 className="text-2xl font-extrabold text-slate-800 tracking-tight">
            Vehicle <span className="text-blue-600">Directory</span>
          </h1>
          <p className="text-[11px] font-bold text-slate-400 uppercase tracking-widest mt-1">
            Trusted Local Transport Services
          </p>
        </div>
      </header>

      <main className="w-full max-w-xl px-4">
        {/* 2. REGISTRATION CTA (Centered) */}
        <div className="flex justify-center w-full my-6">
          <RegisterVehicleCTA />
        </div>

        {/* 3. CONTROL PANEL: FILTER & SEARCH */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-100 mb-6">
          <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider p-4">
            Filter by Type
          </label>

          {/* Filter Toolbar */}
          <div>
            <VehicleFilter
              selectedVehicle={selectedVehicle}
              setSelectedVehicle={setSelectedVehicle}
              selectedCategory={selectedCategory}
              setSelectedCategory={setSelectedCategory}
            />
          </div>

          {/* Search Bar (Placed below filter) */}
          <div className="pt-4 p-4 border-t border-slate-50">
            <SearchBar
              onSearch={setSearchQuery}
              placeholder="Search name or village..."
              className="w-full"
            />
          </div>
        </div>

        {/* 4. RESULTS SECTION */}
        <section>
          {!loading && (
            <div className="flex justify-between items-center mb-4 px-1">
              <h2 className="font-bold text-slate-700 capitalize text-lg">
                {selectedVehicle === "all" ? "All Vehicles" : selectedVehicle}
              </h2>
              {/* Matches Counter - Similar to Worker Project */}
              <span className="text-xs font-bold bg-blue-100 text-blue-700 px-3 py-1.5 rounded-full shadow-sm">
                {visibleVehicles.length} Found
              </span>
            </div>
          )}

          {loading ? (
            <LoadingState />
          ) : (
            <div className="grid grid-cols-1 gap-3">
              {visibleVehicles.length > 0 ? (
                visibleVehicles.map((v, i) => (
                  <VehicleCard
                    key={`${v.mobile_no}-${i}`}
                    name={v.name}
                    village={v.village}
                    contact={v.mobile_no}
                    vehicle_type={v.vehicle_type} // Passing vehicle_type as requested
                    Icon={
                      VEHICLE_REGISTRY[v.vehicle_type]?.Icon || FaCircleQuestion
                    } // Keeping Icon prop
                  />
                ))
              ) : (
                <NoResultsState
                  onClearFilters={() => {
                    setSearchQuery("");
                    setSelectedVehicle("all");
                    setSelectedCategory("all");
                  }}
                />
              )}
            </div>
          )}
        </section>
      </main>
    </div>
  );
};

function ErrorState({ error }: { error: Error }) {
  return (
    <div className="p-8 text-center bg-red-50 rounded-xl border border-red-200 m-4">
      <h2 className="text-red-700 font-bold text-lg">System Offline</h2>
      <p className="text-red-600 mt-1">{error.message}</p>
      <button
        onClick={() => window.location.reload()}
        className="mt-4 px-6 py-2 bg-red-600 text-white rounded-lg font-medium"
      >
        Try Again
      </button>
    </div>
  );
}

function NoResultsState({ onClearFilters }: { onClearFilters: () => void }) {
  return (
    <div className="text-center py-20 bg-white rounded-2xl border-2 border-dashed border-gray-200">
      <p className="text-gray-400 font-semibold text-lg">No results found</p>
      <button
        onClick={onClearFilters}
        className="text-blue-600 font-bold mt-2 hover:text-blue-700 transition-colors"
      >
        Clear all filters
      </button>
    </div>
  );
}
