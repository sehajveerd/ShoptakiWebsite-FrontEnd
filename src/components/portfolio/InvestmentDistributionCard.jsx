import React from 'react';

const InvestmentDistributionCard = () => {
  /**
   * TODO: fetch the property distribution data
   * The data should contain a total amount invested and
   * list of
   *  - propertyType, amount invested in property type,
   *  - percent of total amount invested (decide to calculate here or return from BE),
   *  - color class (required for chart legend)
   * Format the Total Amount Invested if returned unformatted
   */
  const propertyDistributionData = [
    {
      name: 'Residential',
      amountInvested: 225000,
      investmentPercent: 50,
      colorClass: 'bg-secondary-blue50',
    },
    {
      name: 'Commercial',
      amountInvested: 135000,
      investmentPercent: 30,
      colorClass: 'bg-primary-blue500',
    },
    {
      name: 'Other',
      amountInvested: 90000,
      investmentPercent: 20,
      colorClass: 'bg-secondary-blue700',
    },
  ];
  const totalInvestedAmount = '$450,000';

  return (
    <div className="absolute top-[106px] left-[1058px] rounded bg-shades-white w-[244px] h-[531px] overflow-hidden text-xl text-neutral-gray700010101">
      {/* TODO: add the donut chart here to display the property distribution data */}
      <div className="absolute top-[163px] left-[82px] font-medium text-right">
        {totalInvestedAmount}
      </div>
      <div className="absolute top-[16px] left-[16px] text-5xl font-semibold text-black">
        Distribution
      </div>
      {/* Chart legend showing percentage of total amount invested in different property types */}
      <div className="relative top-[295px] left-[28px] w-[190px] h-[auto] text-sm">
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
