import React from 'react';

const InvestmentDistributionCard = ({ chartData, totalInvestedAmount }) => {
  const chartColors = [
    'bg-secondary-blue50',
    'bg-primary-blue500',
    'bg-secondary-blue700',
  ];

  // Transforms chart data in required format as per thr charting library to be used
  const transformData = (chartData, totalInvestedAmount) => {
    // TODO: update this function based on the charting library
    return chartData.map((item, index) => ({
      name: item.propertyType,
      amountInvested: item.amountInvested,
      investmentPercent: (
        (item.amountInvested / totalInvestedAmount) *
        100
      ).toFixed(2), // to fix to two decimal points
      colorClass: chartColors[index % chartColors.length],
    }));
  };

  const propertyDistributionData = transformData(
    chartData,
    totalInvestedAmount
  );

  // convert total invested amount float to the formatted string to display
  const formattedTotalInvestedAmount = `$${totalInvestedAmount.toLocaleString()}`;

  return (
    <div>
      {/* TODO: add the donut chart here to display the property distribution data */}
      {/* TODO: for demo purpose we can add the chart as an image */}
      <div className="absolute top-[163px] left-[82px] font-medium text-right">
        {formattedTotalInvestedAmount}
      </div>
      <div className="absolute top-[16px] left-[16px] text-5xl font-semibold text-black">
        Distribution
      </div>
      {/* Chart legend showing percentage of total amount invested in different property types */}
      <div className="relative top-[295px] left-[16px] w-[190px] h-[auto] text-sm">
        {propertyDistributionData.map((property, index) => (
          <React.Fragment key={property.name}>
            <div className="relative w-[190px] h-[21px] ">
              <div
                className={`absolute top-[0px] left-[0px] rounded ${property.colorClass} w-[18px] h-[18px]`}
              ></div>
              <div className="absolute top-[0px] left-[34px] font-medium">
                {property.name}
              </div>
              <div className="absolute top-[0px] left-[160px] font-medium text-right">
                {property.investmentPercent}%
              </div>
            </div>
            {index !== propertyDistributionData.length - 1 && (
              <div className="relative left-[-0.5px] box-border w-[191px] h-px border-t-[1px] border-solid border-neutral-gray200e8e8e8 my-[10px]"></div>
            )}
          </React.Fragment>
        ))}
      </div>
      <div className="absolute top-[55.5px] left-[-0.5px] box-border w-[245px] h-px border-t-[1px] border-solid border-gainsboro-100" />
    </div>
  );
};

export default InvestmentDistributionCard;
