
import React, { useState, useEffect, type ChangeEvent } from 'react';
import { LuSearch, LuX } from "react-icons/lu";


interface SearchBarProps {
  className?: string;
  placeholder?: string;
  onSearch: (value: string) => void;
  onFocus?: () => void;
  delay?: number;
}

const SearchBar: React.FC<SearchBarProps> = ({ 
  className = "",
  placeholder = "Search...", 
  onSearch, 
  onFocus,
  delay = 500 
}) => {
  const [inputValue, setInputValue] = useState<string>('');

  // Debounce Logic
  useEffect(() => {
    const timer = setTimeout(() => {
      onSearch(inputValue);
    }, delay);

    // Cleanup: This clears the timer if the user types again before the delay finishes
    return () => clearTimeout(timer);
  }, [inputValue, delay, onSearch]);

  const handleClear = () => {
    setInputValue('');
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  return (
    <div className={ `relative w-full max-w-md ${className}` }>
      {/* Search Icon */}
      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
        <LuSearch className="w-5 h-5 text-gray-400" />
      </div>

      {/* Input Field */}
      <input
        type="text"
        className="block w-full p-3 pl-10 pr-10 text-sm text-gray-900 border border-gray-200 rounded-xl bg-white shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
        placeholder={placeholder}
        value={inputValue}
        onChange={handleChange}
        onFocus={onFocus}
      />

      {/* Clear Button */}
      {inputValue && (
        <button
          onClick={handleClear}
          className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-400 hover:text-gray-600 transition-colors"
          type="button"
          aria-label="Clear search"
        >
          <LuX className="w-5 h-5" />
        </button>
      )}
    </div>
  );
};

export default SearchBar;
