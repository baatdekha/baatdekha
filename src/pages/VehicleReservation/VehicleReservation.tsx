import { useMemo, useState } from "react";
import { useGoogleSheet } from "./useGoogleSheet";
import { vehicleRecords } from "./vehicleTypes";
import VehicleCard from "./VehicleCard/VehicleCard";
import VehicleFilter, { type VehicleCategoryTypesWithAll, type VehicleTypesWithAll } from "./VehicleFilter/VehicleFilter";
import SearchBar from "./SearchBar";
import { FaCircleQuestion } from "react-icons/fa6";

export const VehicleReservation = () => {
  // Use your deployed Apps Script URL here
    const SHEET_ID = "1JYY3WnpZdJHI4Q17Hq0RDiuQGtwZkjZSkm-n7hOOqGc";

  
  const { data: rawSheetData, loading, error } = useGoogleSheet(SHEET_ID, "0");

  const [selectedVehicleType, setSelectedVehicleType] = useState<VehicleTypesWithAll>("all_types");
  const [selectedCategory, setSelectedCategory] = useState<VehicleCategoryTypesWithAll>("passenger");
  const [searchQuery, setSearchQuery] = useState<string>("");

  /**
   * Helper: Normalizes sheet values to match vehicleTypes keys.
   * Example: "Passenger Auto" -> "passengerauto"
   */
  const normalize = (str: any) => 
    String(str || "").toLowerCase().replace(/\s+/g, "").trim();

  /**
   * 1. SANITIZATION LAYER
   * Filters out invalid types or records missing critical info (name/mobile).
   */
  const sanitizedVehicles = useMemo(() => {
    if (!rawSheetData || !Array.isArray(rawSheetData)) return [];

    return rawSheetData.filter((record) => {
      const typeKey = normalize(record["vehicle_type"]);
      
      // Ensure key exists in vehicleTypes and basic info is present
      const isValidType = Object.prototype.hasOwnProperty.call(vehicleRecords, typeKey);
      const hasBasicInfo = record["name"] && record["mobile_no"];

      return isValidType && hasBasicInfo;
    });
  }, [rawSheetData]);

  /**
   * 2. VIEW FILTERING LAYER
   * Filters based on the Toolbar selection and the Search input.
   */
  const visibleVehicles = useMemo(() => {
    return sanitizedVehicles.filter((vehicle) => {
      const typeKey = normalize(vehicle["vehicle_type"]);
      const ownerName = String(vehicle["name"] || "").toLowerCase();
      const village = String(vehicle["village"] || "").toLowerCase();

      // Filter by Toolbar (Category/Type)
      const matchesSelection = 
        selectedVehicleType === "all_types" || 
        typeKey === selectedVehicleType.toLowerCase();

      // Filter by Search Query
      const cleanQuery = searchQuery.toLowerCase().trim();
      const matchesSearch = ownerName.includes(cleanQuery) //|| village.includes(cleanQuery);

      return matchesSelection && matchesSearch;
    });
  }, [sanitizedVehicles, selectedVehicleType, searchQuery]);

  // --- ERROR STATE ---
  if (error) {
    return (
      <div className="p-8 text-center bg-red-50 rounded-xl border border-red-200 m-4">
        <h2 className="text-red-700 font-bold">System Offline</h2>
        <p className="text-red-600 mt-2">{error.message}</p>
        <button 
          onClick={() => window.location.reload()} 
          className="mt-4 px-4 py-2 bg-red-600 text-white rounded-md"
        >
          Try Again
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-4 flex flex-col gap-6 min-h-screen">
      {/* STICKY HEADER WITH RESULTS COUNTER */}
      <header className="sticky top-0 bg-white z-20 py-3 border-b space-y-4">
        <div className="flex justify-between items-end">
          <div>
            <h1 className="text-2xl font-bold text-gray-800">Vehicle Directory</h1>
            <p className="text-sm text-gray-500">Find and reserve local transport</p>
          </div>
          <div className="text-right">
            <span className="text-xs font-bold bg-blue-100 text-blue-700 px-3 py-1 rounded-full uppercase tracking-wider">
              {visibleVehicles.length} Results
            </span>
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
          placeholder="Search by name or village..." 
          className=""
        />

        {/* LOADING STATE */}
        {loading ? (
          <div className="flex flex-col items-center justify-center py-24 gap-4">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-600"></div>
            <p className="text-gray-500 animate-pulse font-medium">Fetching live data...</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-3 pb-12">
            {visibleVehicles.length > 0 ? (
              visibleVehicles.map((vehicle, index) => {
                const vehicleKey = normalize(vehicle["vehicle_type"]);
                const config = vehicleRecords[vehicleKey];
                
                return (
                  <VehicleCard
                    key={`${vehicle["mobile_no"]}-${index}`}
                    name={vehicle["name"]}
                    village={vehicle["village"] || "Location N/A"}
                    contact={vehicle["mobile_no"]}
                    Icon={config?.Icon || FaCircleQuestion}
                  />
                );
              })
            ) : (
              /* EMPTY STATE */
              <div className="text-center py-20 bg-gray-50 rounded-xl border-2 border-dashed border-gray-200">
                <p className="text-gray-400 font-medium">No vehicles matching your search.</p>
                <button 
                  onClick={() => {setSearchQuery(""); setSelectedVehicleType("all_types")}}
                  className="text-blue-600 text-sm mt-3 hover:underline"
                >
                  Reset all filters
                </button>
              </div>
            )}
          </div>
        )}
      </main>
    </div>
  );
};
