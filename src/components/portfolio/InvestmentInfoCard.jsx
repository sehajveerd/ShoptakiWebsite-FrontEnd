import React from 'react';
import { IconPositivePctChange, IconNegativePctChange } from '../ui/icons';

// TODO: take the data required for graph as a prop and format the it as required by the chart
const InvestmentInfoCard = ({ cardHeader, amount, baseAmount }) => {
  // convert amount in float to the formatted string to display
  const formattedAmount = `$${amount.toLocaleString()}`;
  const amountPctChange = (((amount - baseAmount) / baseAmount) * 100).toFixed(
    2
  );

  return (
    <div>
      <div className="absolute top-[0px] left-[0px] rounded bg-shades-white w-[365px] h-[145px]" />
      <div className="absolute top-[20px] left-[20px] flex flex-col items-start justify-start gap-[8px]">
        <div className="relative font-medium">{cardHeader}</div>
        <div
          className={`relative text-5xl font-semibold ${
            amount > baseAmount ? 'text-green' : 'text-red'
          }`}
        >
          {formattedAmount}
        </div>
      </div>
      <div
        className={`absolute top-[107px] left-[51px] text-base font-medium ${
          amount > baseAmount ? 'text-green' : 'text-red'
        }`}
      >
        {amountPctChange}%
      </div>
      {amount > baseAmount ? (
        <IconPositivePctChange className="absolute top-[109px] left-[25px] w-5 h-5" />
      ) : (
        <IconNegativePctChange className="absolute top-[109px] left-[25px] w-5 h-5" />
      )}
      {/* TODO: add actual graph here for current value over a period of time */}
      <img
        className="absolute top-[20px] left-[213px] rounded w-[152px] h-[125px] overflow-hidden"
        alt="Graph of current value over a period of time"
        src="/frame-1370.svg"
      />
    </div>
  );
};

export default InvestmentInfoCard;
