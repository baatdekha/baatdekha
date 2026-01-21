import React, { useEffect, useMemo, useState } from "react";
import banner from "./assets/asianpaint.png";
import { ColorBox } from "./components/ColorBox";
import { HueSlider } from "./components/HueSlider";
import { PopupCard } from "./components/PopupCard";
import { SearchBar } from "./components/SearchBar";
import { type Shade } from "./types";
import { hexToHsl } from "./utils/colorConverter";

const PaintsMaker: React.FC = () => {
  const [shades, setShades] = useState<Shade[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [hue, setHue] = useState(300);
  const [activeColor, setActiveColor] = useState<Shade | null>(null);

  useEffect(() => {
    fetch("/shadelisting.shade.json")
      .then((res) => res.json())
      .then((data) => setShades(data.shade));
  }, []);

  // Optimized Filtering using useMemo
  const filteredShades = useMemo(() => {
    if (searchQuery) {
      return shades
        .filter(
          (s) =>
            s.entityName.toLowerCase().includes(searchQuery.toLowerCase()) ||
            s.entityCode.includes(searchQuery),
        )
        .slice(0, 50); // Limit results for performance
    }

    const threshold = 15;
    return shades
      .filter((s) => {
        const [h] = hexToHsl(s.shadeHexCode);
        return Math.abs(h - hue) <= threshold;
      })
      .sort((a, b) => hexToHsl(b.shadeHexCode)[2] - hexToHsl(a.shadeHexCode)[2])
      .slice(0, 100);
  }, [shades, searchQuery, hue]);

  return (
    <div className="min-h-screen bg-gray-50 font-poppins">
      <header className="w-full">
        <img
          src={banner}
          alt="Banner"
          className="w-full object-cover h-48 md:h-64"
        />
      </header>

      <main className="flex flex-col md:flex-row gap-6 p-6 max-w-7xl mx-auto">
        {/* Sidebar Controls */}
        <aside className="w-full md:w-80 bg-white p-6 rounded-2xl shadow-sm h-fit sticky top-6">
          <div className="space-y-6">
            <SearchBar
              onSearch={setSearchQuery}
              suggestions={shades.map((s) => s.entityName)}
            />
            <HueSlider
              value={hue}
              onChange={(val) => {
                setHue(val);
                setSearchQuery("");
              }}
            />
          </div>
        </aside>

        {/* Results Grid */}
        <section className="flex-1">
          <div className="grid grid-cols-4 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-4">
            {filteredShades.map((shade) => (
              <ColorBox
                key={shade.entityCode}
                shade={shade}
                onClick={() => setActiveColor(shade)}
              />
            ))}
          </div>
        </section>
      </main>

      {/* Modern Modal for Selection */}
      {activeColor && (
        <PopupCard
          activeColor={activeColor}
          onOutsideClick={() => setActiveColor(null)}
        />
      )}
    </div>
  );
};

export default PaintsMaker;
