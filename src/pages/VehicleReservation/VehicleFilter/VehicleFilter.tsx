import { useRef, useMemo } from "react";
import { RadioToolbar, type RadioOption } from "@/components/RadioToolbar";
import {
  VEHICLE_REGISTRY,
  type VehicleCategoryOrAll,
  type VehicleMeta,
  type VehicleOption,
  type VehicleId,
  type VehicleIdOrAll,
} from "../vehicleTypes";
import { LuLayoutGrid } from "react-icons/lu";

/* ---------- Types ---------- */

interface VehicleFilterProps {
  selectedCategory: VehicleCategoryOrAll;
  selectedVehicle: VehicleIdOrAll;
  setSelectedCategory: (v: VehicleCategoryOrAll) => void;
  setSelectedVehicle: (v: VehicleIdOrAll) => void;
}

/* ---------- Pure helpers ---------- */

function buildVehicleOptions(
  category: VehicleCategoryOrAll,
): VehicleOption[] {
  const allVehicles = (
    Object.entries(VEHICLE_REGISTRY) as [VehicleId, VehicleMeta][]
  ).map(([value, info]) => ({
    value,
    label: info.label,
    Icon: info.Icon,
    category: info.category,
  }));

  const filtered =
    category === "all"
      ? allVehicles
      : allVehicles.filter(v => v.category === category);

  return [
    {
      value: "all",
      label: category === "all" ? "All Vehicles" : `All ${category}`,
      Icon: LuLayoutGrid,
      category,
    },
    ...filtered,
  ];
}

/* ---------- Component ---------- */

const VehicleFilter = ({
  selectedCategory,
  selectedVehicle,
  setSelectedCategory,
  setSelectedVehicle,
}: VehicleFilterProps) => {
  const lastSelected = useRef<
    Record<VehicleCategoryOrAll, VehicleIdOrAll>
  >({
    all: "all",
    passenger: "all",
    commercial: "all",
  });

  const categories: RadioOption<VehicleCategoryOrAll>[] = [
    { value: "all", label: "All" },
    { value: "passenger", label: "Passenger", accent: "green" },
    { value: "commercial", label: "Commercial", accent: "teal" },
  ];

  const vehicleOptions = useMemo(
    () => buildVehicleOptions(selectedCategory),
    [selectedCategory],
  );

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
        />
      </div>
    </div>
  );
};

export default VehicleFilter;
