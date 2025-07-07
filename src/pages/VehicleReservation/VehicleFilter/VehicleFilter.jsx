import { useState, useEffect, useRef } from 'react';
import RadioToolbar from '../../../components/RadioToolbar/RadioToolbar';
import './VehicleFilter.css';

import AutoIcon from '../assets/auto-rickshaw.svg?react';
import BoleroIcon from '../assets/bolero.svg?react';
import CarIcon from '../assets/car.svg?react';
import TravellerIcon from '../assets/traveller.svg?react';
import { FaShuttleVan, FaBus, FaTractor, FaTruckPickup, FaTruck } from 'react-icons/fa';

const VehicleFilter = ({ selectedVehicle, setSelectedVehicle }) => {
  const [selectedCategory, setSelectedCategory] = useState('passenger');
  const lastSelectedVehicles = useRef({
    passenger: '',
    commercial: '',
  });

  const vehicleCategories = [
    { value: 'passenger', label: 'Passenger' },
    { value: 'commercial', label: 'Commercial' },
  ];

  const passengerVehicles = [
    { value: 'passengerauto', label: 'Passenger Auto', Icon: AutoIcon },
    { value: 'car', label: 'Car', Icon: CarIcon },
    { value: 'bolero', label: 'Bolero', Icon: BoleroIcon },
    { value: 'van', label: 'Van', Icon: FaShuttleVan },
    // { value: 'bus', label: 'Bus', Icon: FaBus },
    { value: 'traveller', label: 'Traveller', Icon: TravellerIcon },
  ];

  const commercialVehicles = [
    { value: 'pickup', label: 'Pick Up', Icon: FaTruckPickup },
    { value: 'tractor', label: 'Tractor', Icon: FaTractor },
    { value: 'minitruck', label: 'Mini Truck', Icon: FaTruck },
  ];

  const vehicleMap = {
    passenger: passengerVehicles,
    commercial: commercialVehicles,
  };

  const currentOptions = vehicleMap[selectedCategory];

  useEffect(() => {
    const lastSelected = lastSelectedVehicles.current[selectedCategory];
    if (!lastSelected || !currentOptions.find(v => v.value === lastSelected)) {
      const defaultVehicle = currentOptions[0]?.value;
      setSelectedVehicle(defaultVehicle);
      lastSelectedVehicles.current[selectedCategory] = defaultVehicle;
    } else {
      setSelectedVehicle(lastSelected);
    }
  }, [selectedCategory, currentOptions, setSelectedVehicle]);

  const handleVehicleChange = (value) => {
    setSelectedVehicle(value);
    lastSelectedVehicles.current[selectedCategory] = value;
  };

  return (
    <div id="filter-container">
      <label>Select Vehicle Type:</label>
      <RadioToolbar
        className="vehicle-category"
        name="vehicle-type"
        options={vehicleCategories}
        selectedValue={selectedCategory}
        onChange={setSelectedCategory}
      />

      <label>Filter Vehicles:</label>
      <RadioToolbar
        name="vehicle-filter"
        options={currentOptions}
        selectedValue={selectedVehicle}
        onChange={handleVehicleChange}
      />
    </div>
  );
};

export default VehicleFilter;
