import React from 'react';

const PriceorIncomeValue = ({ label, value }) => {
  return (
    <div className="flex flex-row w-2/3 justify-between my-6">
      <div className="text-zinc-700 text-sm font-normal font-poppins">
        {label}
      </div>
      <div className="text-zinc-700 text-base font-poppins flex items-end justify-end">
        {value}
      </div>
    </div>
  );
};

export default PriceorIncomeValue;
