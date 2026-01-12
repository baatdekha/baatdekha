import { useRef, useMemo } from "react";
import { RadioToolbar, type RadioOption } from "@/components/RadioToolbar";
import {
  vehicleRecords,
  type VehicleCategoryTypes,
  type VehicleInfoType,
  type VehicleTypes,
} from "../vehicleTypes";
import { LuLayoutGrid } from "react-icons/lu";

export type VehicleCategoryTypesWithAll = VehicleCategoryTypes | "all";

export type VehicleTypesWithAll = VehicleTypes | "all_types";

type VehicleInfoTypesWithAll = Omit<VehicleInfoType, "category"> & {
  value: VehicleTypesWithAll;
  category: VehicleCategoryTypesWithAll;
};

interface VehicleFilterProps {
  selectedVehicle: VehicleTypesWithAll;
  setSelectedVehicle: (v: VehicleTypesWithAll) => void;
  selectedCategory: VehicleCategoryTypesWithAll;
  setSelectedCategory: (v: VehicleCategoryTypesWithAll) => void;
}

/** Try this:
 * define the states variables in this component
 * return the selectedCategory and selectedVehicle as callback function (onSelect)
 * add a way to reset the values to all
 *
 * should I define separate states for all 3 categories? In that way the lastSelected memory might not needed.
 */

const VehicleFilter = ({
  selectedVehicle,
  setSelectedVehicle,
  selectedCategory,
  setSelectedCategory,
}: VehicleFilterProps) => {
  const lastSelected = useRef<
    Record<VehicleCategoryTypesWithAll, VehicleTypesWithAll>
  >({
    passenger: "all_types",
    commercial: "pickup",
    all: "all_types", // Default "memory" for the All category
  });

  const categories: RadioOption<VehicleCategoryTypesWithAll>[] = [
    { value: "all", label: "All" },
    { value: "passenger", label: "Passenger", accent: "green" },
    { value: "commercial", label: "Commercial", accent: "teal" },
  ];

  const currentVehicles = useMemo(() => {
    // 1. Convert the Record object into a flat array of vehicle objects
    // We include the 'value' (key) inside each object for easier mapping
    const allVehiclesArray = (
      Object.entries(vehicleRecords) as [VehicleTypes, VehicleInfoType][]
    ).map(([key, info]) => ({
      value: key,
      label: info.label,
      Icon: info.Icon,
      category: info.category, // Keep track of category for filtering
    }));

    // 2. Filter by category if a specific one is chosen
    // If selectedCategory is "all", we keep everything
    const filteredByCategory = allVehiclesArray.filter(
      (v) => selectedCategory === "all" || v.category === selectedCategory,
    );

    // 3. Create the "All Vehicles" virtual option
    // This option will now dynamically represent "All Passenger", "All Commercial", or "All Types"
    const allOption = {
      value: "all_types",
      label:
        selectedCategory === "all" ? "All Vehicles" : `All ${selectedCategory}`,
      Icon: LuLayoutGrid,
    };

    // 4. Combine: [ "All ...", ...filteredItems ]
    return [allOption, ...filteredByCategory] as [VehicleInfoTypesWithAll];
  }, [selectedCategory]);

  const handleVehicleChange = (vehicle: VehicleTypesWithAll) => {
    setSelectedVehicle(vehicle);
    lastSelected.current[selectedCategory] = vehicle;
  };

  const handleCategoryChange = (category: VehicleCategoryTypesWithAll) => {
    setSelectedCategory(category);
    setSelectedVehicle(lastSelected.current[category] ?? "all_types");
  };

  return (
    <div id="filter-container" className="flex flex-col gap-6 p-4">
      {/* Category Selection */}
      <div>
        <label className="text-sm font-semibold text-gray-600 block mb-3">
          Select Category
        </label>
        <RadioToolbar
          name="vehicle-category"
          options={categories}
          value={selectedCategory}
          onChange={handleCategoryChange}
        />
      </div>

      {/* Specific Vehicle Selection (Includes "All" option) */}
      <div className="">
        <label className="text-sm font-semibold text-gray-600 block mb-3 overflow-x-hidden">
          Filter by Specific Vehicle Type
        </label>
        <RadioToolbar
          className="relative w-full"
          name="vehicle-filter"
          options={currentVehicles}
          value={selectedVehicle}
          onChange={handleVehicleChange}
          iconPosition="top"
        />
      </div>
    </div>
  );
};

export default VehicleFilter;
