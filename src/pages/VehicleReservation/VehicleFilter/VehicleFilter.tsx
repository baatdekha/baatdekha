
import { useState, useEffect, useRef, useMemo } from "react";
import { RadioToolbar, type RadioOption } from "@/components/RadioToolbar";
import { vehicleRecords, type VehicleCategoryTypes, type VehicleInfoType, type VehicleTypes } from "../vehicleTypes";
import { LuLayoutGrid } from "react-icons/lu";

export type VehicleCategoryTypesWithAll = VehicleCategoryTypes | "all";

export type VehicleTypesWithAll =  VehicleTypes | "all_types";

type VehicleInfoTypesWithAll = Omit<VehicleInfoType,"category"> & {
  value: VehicleTypesWithAll;
  category: VehicleCategoryTypesWithAll;
}

interface VehicleFilterProps {
  selectedVehicle: VehicleTypesWithAll;
  setSelectedVehicle: (v: VehicleTypesWithAll) => void;
  selectedCategory: VehicleCategoryTypesWithAll
  setSelectedCategory: (v: VehicleCategoryTypesWithAll) => void
}

const VehicleFilter = ({ selectedVehicle, setSelectedVehicle, selectedCategory, setSelectedCategory }: VehicleFilterProps) => {

  const lastSelected = useRef<Record<VehicleCategoryTypesWithAll, VehicleTypesWithAll>>({
    passenger: "passengerauto",
    commercial: "pickup",
    all: "all_types", // Default "memory" for the All category
  });

  const categories: RadioOption<VehicleCategoryTypesWithAll>[] = [
    { value: "all", label: "All" },
    { value: "passenger", label: "Passenger", accent: "red" },
    { value: "commercial", label: "Commercial", accent:"blue" },
  ];


const currentVehicles = useMemo(() => {
  // 1. Convert the Record object into a flat array of vehicle objects
  // We include the 'value' (key) inside each object for easier mapping
  const allVehiclesArray = (Object.entries(vehicleRecords) as [VehicleTypes, VehicleInfoType][]).map(([key, info]) => ({
    value: key,
    label: info.label,
    Icon: info.Icon,
    category: info.category, // Keep track of category for filtering
  }));

  // 2. Filter by category if a specific one is chosen
  // If selectedCategory is "all", we keep everything
  const filteredByCategory = allVehiclesArray.filter((v) => 
    selectedCategory === "all" || v.category === selectedCategory
  );

  // 3. Create the "All Vehicles" virtual option
  // This option will now dynamically represent "All Passenger", "All Commercial", or "All Types"
  const allOption = {
    value: "all_types",
    label: selectedCategory === "all" ? "All Vehicles" : `All ${selectedCategory}`,
    Icon: LuLayoutGrid,
  };

  // 4. Combine: [ "All ...", ...filteredItems ]
  return [allOption, ...filteredByCategory] as [VehicleInfoTypesWithAll];
}, [selectedCategory]);


useEffect(() => {
  const previous = lastSelected.current[selectedCategory];
  
  // Check if our previously saved vehicle is still in the filtered list
  const isValid = currentVehicles.some((v) => v.value === previous);
  
  // Default to "all_types" if no valid previous selection exists
  const fallback: VehicleTypesWithAll = "all_types"; 

  const next = isValid ? previous : fallback;

  setSelectedVehicle(next);
  lastSelected.current[selectedCategory] = next;
}, [selectedCategory, currentVehicles]);

  return (
    <div id="filter-container" className="flex flex-col gap-6 p-4">
      {/* Category Selection */}
      <div>
        <label className="text-sm font-semibold text-gray-600 block mb-3">
          Step 1: Select Category
        </label>
        <RadioToolbar
          name="vehicle-category"
          options={categories}
          value={selectedCategory}
          onChange={(val) => setSelectedCategory(val as VehicleCategoryTypesWithAll)}
        />
      </div>

      {/* Specific Vehicle Selection (Includes "All" option) */}
      <div className="">
        <label className="text-sm font-semibold text-gray-600 block mb-3 overflow-x-hidden">
          Step 2: Filter by Specific Type
        </label>
        <RadioToolbar
          className="relative w-full"
          name="vehicle-filter"
          options={currentVehicles}
          value={selectedVehicle}
          onChange={(value) => {
            setSelectedVehicle(value);
            lastSelected.current[selectedCategory] = value;
          }}
          iconPosition="top"
        />
      </div>
    </div>
  );
};

export default VehicleFilter;
