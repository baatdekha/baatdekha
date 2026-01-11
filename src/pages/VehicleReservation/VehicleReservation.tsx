import { useMemo, useState } from "react";
import { useGoogleSheet } from "./useGoogleSheet";
import { vehicleRecords } from "./vehicleTypes";
import VehicleCard from "./VehicleCard/VehicleCard";
import VehicleFilter, {
  type VehicleCategoryTypesWithAll,
  type VehicleTypesWithAll,
} from "./VehicleFilter/VehicleFilter";
import SearchBar from "./SearchBar";
import { FaCircleQuestion } from "react-icons/fa6";
import { vehicleOwnerSchema } from "./vehicleOwner.schema";

export const VehicleReservation = () => {
  const SHEET_ID = "1Z_QmGSKoEJ9ycIMpvnRv4ZbcKH4rzH-z";
  //"1JYY3WnpZdJHI4Q17Hq0RDiuQGtwZkjZSkm-n7hOOqGc";

  const { data, loading, error } = useGoogleSheet(
    SHEET_ID,
    "0",
    vehicleOwnerSchema.parsers,
  );

  const [selectedVehicleType, setSelectedVehicleType] =
    useState<VehicleTypesWithAll>("all_types");
  const [selectedCategory, setSelectedCategory] =
    useState<VehicleCategoryTypesWithAll>("passenger");
  const [searchQuery, setSearchQuery] = useState<string>("");

  // Combined Sanitization + Filtering (O(n) complexity)
  const visibleVehicles = useMemo(() => {
    if (!data) return [];
    const query = searchQuery.toLowerCase().trim();

    return data.filter((v) => {
      // 1. Basic Validation
      if (!v.vehicle_type || !v.name || !v.mobile_no) return false;

      // 2. Filter by Type Toggle
      const matchesType =
        selectedVehicleType === "all_types" ||
        v.vehicle_type === selectedVehicleType;

      // 3. Filter by Search (Name or Village)
      const matchesSearch =
        v.name.toLowerCase().includes(query) ||
        v.village.toLowerCase().includes(query);

      return matchesType && matchesSearch;
    });
  }, [data, selectedVehicleType, searchQuery]);

  if (error)
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

  return (
    <div className="max-w-4xl mx-auto p-4 flex flex-col gap-6 min-h-screen bg-gray-50">
      <header className="sticky top-0 bg-white/90 backdrop-blur-md z-20 py-4 border-b -mx-4 px-4">
        <div className="flex justify-between items-center mb-4">
          <div>
            <h1 className="text-2xl font-black text-gray-900 tracking-tight">
              Vehicle Directory
            </h1>
            <p className="text-sm text-gray-500 font-medium">
              Verified local transport
            </p>
          </div>
          <div className="bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-bold shadow-sm">
            {visibleVehicles.length} UNITS
          </div>
        </div>

        <VehicleFilter
          selectedVehicle={selectedVehicleType}
          setSelectedVehicle={setSelectedVehicleType}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
      </header>

      <main className="flex flex-col gap-4">
        <SearchBar
          onSearch={setSearchQuery}
          placeholder="Search name or village..."
        />

        {loading ? (
          <div className="flex flex-col items-center justify-center py-32 gap-3">
            <div className="w-10 h-10 border-4 border-blue-600/20 border-t-blue-600 rounded-full animate-spin" />
            <p className="text-gray-400 font-medium animate-pulse">
              Updating directory...
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-3 pb-20">
            {visibleVehicles.length > 0 ? (
              visibleVehicles.map((v, i) => (
                <VehicleCard
                  key={`${v.mobile_no}-${i}`}
                  name={v.name}
                  village={v.village}
                  contact={v.mobile_no}
                  Icon={
                    vehicleRecords[v.vehicle_type!]?.Icon || FaCircleQuestion
                  }
                />
              ))
            ) : (
              <div className="text-center py-20 bg-white rounded-2xl border-2 border-dashed border-gray-200">
                <p className="text-gray-400 font-semibold text-lg">
                  No results found
                </p>
                <button
                  onClick={() => {
                    setSearchQuery("");
                    setSelectedVehicleType("all_types");
                  }}
                  className="text-blue-600 font-bold mt-2 hover:text-blue-700 transition-colors"
                >
                  Clear all filters
                </button>
              </div>
            )}
          </div>
        )}
      </main>
    </div>
  );
};
