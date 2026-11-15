import { useMemo, useRef } from "react";
import { RadioToolbar, type RadioOption } from "@/components/RadioToolbar";

import {
  VEHICLE_OPTIONS,
  VEHICLE_OPTIONS_WITH_ALL,
  type VehicleCategoryOrAll,
  type VehicleIdOrAll,
  type VehicleOption,
} from "../registry/vehicles.options";

/* ---------- Types ---------- */

interface VehicleFilterProps {
  selectedCategory: VehicleCategoryOrAll;
  selectedVehicle: VehicleIdOrAll;
  setSelectedCategory: (v: VehicleCategoryOrAll) => void;
  setSelectedVehicle: (v: VehicleIdOrAll) => void;
}

/* ---------- Component ---------- */

const VehicleFilter = ({
  selectedCategory,
  selectedVehicle,
  setSelectedCategory,
  setSelectedVehicle,
}: VehicleFilterProps) => {
  const lastSelected = useRef<Record<VehicleCategoryOrAll, VehicleIdOrAll>>({
    all: "all",
    passenger: "all",
    commercial: "all",
  });

  const categories: RadioOption<VehicleCategoryOrAll>[] = [
    { value: "all", label: "All" },
    { value: "passenger", label: "Passenger", accent: "green" },
    { value: "commercial", label: "Commercial", accent: "orange" },
  ];

  const vehicleOptions = useMemo(() => {
    const base: VehicleOption[] =
      selectedCategory === "all"
        ? VEHICLE_OPTIONS_WITH_ALL
        : [
            // keep "all" option always on top
            {
              ...VEHICLE_OPTIONS_WITH_ALL[0],
              label: `All ${selectedCategory}`,
            },
            ...VEHICLE_OPTIONS.filter((v) => v.category === selectedCategory),
          ];

    return base;
  }, [selectedCategory]);

  const handleVehicleChange = (vehicle: VehicleIdOrAll) => {
    setSelectedVehicle(vehicle);
    lastSelected.current[selectedCategory] = vehicle;
  };

  const handleCategoryChange = (category: VehicleCategoryOrAll) => {
    setSelectedCategory(category);
    setSelectedVehicle(lastSelected.current[category] ?? "all");
  };

  return (
    <div className="flex flex-col gap-6 p-4">
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

      <div>
        <label className="text-sm font-semibold text-gray-600 block mb-3">
          Filter by Specific Vehicle Type
        </label>
        <RadioToolbar
          name="vehicle-filter"
          options={vehicleOptions}
          value={selectedVehicle}
          onChange={handleVehicleChange}
          iconPosition="top"
          accent="blue"
        />
      </div>
    </div>
  );
};

export default VehicleFilter;
