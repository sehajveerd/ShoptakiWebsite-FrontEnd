/**
 * This file contains code for a MultiButtonsToggleGroup component that displays a group of buttons that can be toggled on and off.
 * You can use this component anywhere in the app where you need to display a group of buttons that can be toggled on and off.
 * The props required by this component are:
 * 1. filters: an array of strings that will be displayed as buttons
 * 2. initialFilterValue: the initial value of the filter
 * 3. onFiltersChange: a function that will be called when the filters are changed
 */
import React, { useEffect, useState } from 'react';

const MultiButtonsToggleGroup = ({
  filters,
  initialFilterValue,
  onFiltersChange,
}) => {
  const [selectedFilters, setSelectedFilters] = useState([initialFilterValue]);

  useEffect(() => {
    onFiltersChange(selectedFilters);
  }, [selectedFilters]);

  const toggleFilter = filter => {
    if (filter === initialFilterValue) {
      setSelectedFilters([initialFilterValue]);
    } else {
      if (selectedFilters.includes(initialFilterValue)) {
        setSelectedFilters([filter]);
      } else if (selectedFilters.includes(filter)) {
        setSelectedFilters(prev => prev.filter(f => f !== filter));
      } else {
        setSelectedFilters(prev => [...prev, filter]);
      }
    }
  };

  return (
    <>
      {filters.map(filter => (
        <button
          key={filter}
          className={`cursor-pointer border-none py-[5px] px-3 rounded-sm flex flex-row items-center justify-start ${
            selectedFilters.includes(filter)
              ? 'bg-primaryblue-500 shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] text-white'
              : 'bg-white text-neutralgray-600'
          }`}
          onClick={() => toggleFilter(filter)}
        >
          <div className="relative text-xs font-semibold font-poppins text-left">
            {filter}
          </div>
        </button>
      ))}
    </>
  );
};

export default MultiButtonsToggleGroup;
