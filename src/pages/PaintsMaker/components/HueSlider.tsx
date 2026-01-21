import React from 'react';

interface HueSliderProps {
  value: number;
  onChange: (val: number) => void;
}

export const HueSlider: React.FC<HueSliderProps> = ({ value, onChange }) => {
  return (
    <div className="flex flex-col gap-4 w-full py-4">
      <div className="flex justify-between items-center">
        <label className="text-lg font-bold text-gray-700 tracking-tight">
          Filter by Hue:
        </label>
        <span className="px-2 py-1 bg-blue-50 text-blue-600 rounded-md text-xs font-mono font-bold">
          {value}°
        </span>
      </div>
      
      <div className="relative flex items-center h-6">
        <input
          type="range"
          min="0"
          max="360"
          value={value}
          onChange={(e) => onChange(Number(e.target.value))}
          className="hue-slider-input rounded-sm"
          style={{
            // Keeping the rainbow gradient inline as it's dynamic/specific to this tool
            background: 'linear-gradient(to right, #ff0000 0%, #ffff00 17%, #00ff00 33%, #00ffff 50%, #0000ff 67%, #ff00ff 83%, #ff0000 100%)'
          }}
        />
      </div>
    </div>
  );
};

