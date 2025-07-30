import React from "react";

type FilterOption = "All" | "Movie" | "TV Show";

interface FilterTabsProps {
  value: FilterOption;
  onChange: (value: FilterOption) => void;
}

const FilterTabs: React.FC<FilterTabsProps> = ({ value, onChange }) => {
  const options: FilterOption[] = ["All", "Movie", "TV Show"];

  return (
    <div className="flex gap-2 my-4 justify-end">
      {options.map((option) => (
        <button
          key={option}
          onClick={() => onChange(option)}
          className={`px-4 py-2 rounded-full border text-sm font-medium transition-all cursor-pointer
            ${
              value === option
                ? "bg-indigo-600 text-white border-indigo-600"
                : "bg-[#1e2939] text-gray-300 border-gray-600 hover:bg-[#334155]"
            }`}
        >
          {option}
        </button>
      ))}
    </div>
  );
};

export default FilterTabs;
