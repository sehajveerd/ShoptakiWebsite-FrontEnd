import React from 'react';
import NavigationSidebar from '../components/NavigationSidebar';
import InvestmentDistributionCard from '../components/portfolio/InvestmentDistributionCard';
import InvestmentInfoCard from '../components/portfolio/InvestmentInfoCard';
import InvestmentValueChart from '../components/portfolio/InvestmentValueChart';

const Portfolio = () => {
  return (
    <div className="relative bg-neutral-gray100f1f1f1 w-full h-[1898px] overflow-y-auto text-left text-sm text-black font-body-xs12">
      <div className="absolute top-5 left-[272px] text-5xl font-semibold text-gray-900">
        My Portfolio
      </div>
      <div className="absolute top-[76.5px] left-[239.5px] box-border w-full h-px border-t-[1px] border-solid border-gainsboro-100" />
      <NavigationSidebar />
      <div className="absolute top-[106px] left-[1058px] rounded bg-shades-white w-[244px] h-[531px] overflow-hidden text-xl text-neutral-gray700010101">
        <InvestmentDistributionCard
          chartData={[
            { propertyType: 'Residential', amountInvested: 225000 },
            { propertyType: 'Commercial', amountInvested: 135000 },
            { propertyType: 'Other', amountInvested: 90000 },
          ]}
          totalInvestedAmount={450000}
        />
      </div>
      <div className="absolute top-[106px] left-[272px] w-[365px] h-[145px] text-xs text-gray-2000">
        <InvestmentInfoCard
          cardHeader="TOTAL INVESTMENT"
          amount={26500}
          baseAmount={25000}
        />
      </div>
      <div className="absolute top-[106px] left-[661px] w-[365px] h-[145px] text-xs text-gray-2000">
        <InvestmentInfoCard
          cardHeader="CURRENT VALUE"
          amount={26500}
          baseAmount={25000}
        />
      </div>
      <div className="absolute top-[276px] left-[272px] rounded-3xs bg-shades-white w-[754px] h-[362px] text-center text-xs text-neutral-gray500747474 font-inter">
        {/* TODO: pass required data as props to the chart */}
        <InvestmentValueChart />
      </div>
      <div className="absolute top-[668px] left-[272px] text-xl rounded-xl bg-shades-white w-[1030px] h-12 overflow-hidden">
        <div className="absolute top-[9px] left-[21px] font-semibold">
          My Investments
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
