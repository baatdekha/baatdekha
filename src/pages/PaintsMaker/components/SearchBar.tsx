import React, { useState, useEffect, useRef } from 'react';
import { LuSearch, LuX } from 'react-icons/lu'; // Import icons

interface SearchBarProps {
  suggestions: string[];
  onSearch: (value: string) => void;
  maxSuggestions?: number;
}

export const SearchBar: React.FC<SearchBarProps> = ({ 
  suggestions, 
  onSearch, 
  maxSuggestions = 10 
}) => {
  const [inputValue, setInputValue] = useState('');
  const [filtered, setFiltered] = useState<string[]>([]);
  const [currentFocus, setCurrentFocus] = useState(-1);
  const [showDropdown, setShowDropdown] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target as Node)) {
        setShowDropdown(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    updateSearch(value);
  };

  const updateSearch = (value: string) => {
    setInputValue(value);
    onSearch(value);

    if (!value.trim()) {
      setFiltered([]);
      setShowDropdown(false);
      return;
    }

    const matches = suggestions
      .filter(item => item.toLowerCase().startsWith(value.toLowerCase()))
      .slice(0, maxSuggestions);

    setFiltered(matches);
    setShowDropdown(true);
    setCurrentFocus(-1);
  };

  const clearSearch = () => {
    updateSearch('');
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowDown") {
      setCurrentFocus(prev => (prev < filtered.length - 1 ? prev + 1 : 0));
    } else if (e.key === "ArrowUp") {
      setCurrentFocus(prev => (prev > 0 ? prev - 1 : filtered.length - 1));
    } else if (e.key === "Enter") {
      if (currentFocus > -1) {
        e.preventDefault();
        selectOption(filtered[currentFocus]);
      }
    }
  };

  const selectOption = (value: string) => {
    setInputValue(value);
    onSearch(value);
    setShowDropdown(false);
  };

  return (
    <div ref={wrapperRef} className="relative w-full max-w-[300px]">
      <div className="relative group">
        {/* Search Icon */}
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <LuSearch className="h-5 w-5 text-gray-400 group-focus-within:text-blue-500 transition-colors" />
        </div>

        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          onFocus={() => inputValue && setShowDropdown(true)}
          placeholder="Search colors..."
          className="w-full pl-10 pr-10 py-2.5 bg-white border border-gray-200 rounded-xl shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
        />

        {/* Clear Button (X Icon) */}
        {inputValue && (
          <button
            onClick={clearSearch}
            className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-600 transition-colors"
            title="Clear search"
          >
            <LuX className="h-5 w-5" />
          </button>
        )}
      </div>

      {/* Suggestion Dropdown */}
      {showDropdown && filtered.length > 0 && (
        <div className="absolute z-100 w-full mt-2 bg-white border border-gray-100 rounded-xl shadow-xl overflow-hidden animate-in fade-in slide-in-from-top-1 duration-200">
          {filtered.map((suggestion, index) => {
            const matchPart = suggestion.slice(0, inputValue.length);
            const restPart = suggestion.slice(inputValue.length);

            return (
              <div
                key={suggestion}
                onMouseDown={(e) => {
                   e.preventDefault(); // Prevents blur before click
                   selectOption(suggestion);
                }}
                className={`px-4 py-2.5 cursor-pointer text-sm transition-colors ${
                  index === currentFocus 
                    ? 'bg-blue-600 text-white' 
                    : 'text-gray-700 hover:bg-blue-50'
                }`}
              >
                <span className="font-bold">{matchPart}</span>
                {restPart}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

