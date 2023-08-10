import React from 'react';
import NavigationSidebar from '../components/NavigationSidebar';
import InvestmentDistributionCard from '../components/portfolio/InvestmentDistributionCard';

const Portfolio = () => {
  return (
    <div className="relative bg-neutral-gray100f1f1f1 w-full h-[1898px] overflow-y-auto text-left text-sm text-black font-body-xs12">
      <div className="absolute top-5 left-[272px] text-5xl font-semibold text-gray-900">
        My Portfolio
      </div>
      <div className="absolute top-[76.5px] left-[239.5px] box-border w-full h-px border-t-[1px] border-solid border-gainsboro-100" />
      <NavigationSidebar />
      <InvestmentDistributionCard
        chartData={[
          { propertyType: 'Residential', amountInvested: 225000 },
          { propertyType: 'Commercial', amountInvested: 135000 },
          { propertyType: 'Other', amountInvested: 90000 },
        ]}
        totalInvestedAmount={450000}
      />
    </div>
  );
};

export default Portfolio;
