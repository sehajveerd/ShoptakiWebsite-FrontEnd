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
      <InvestmentDistributionCard />
    </div>
  );
};

export default Portfolio;
