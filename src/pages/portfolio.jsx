import React, { useState } from 'react';
import NavigationSidebar from '../components/NavigationSidebar';
import InvestmentDistributionCard from '../components/portfolio/InvestmentDistributionCard';
import InvestmentInfoCard from '../components/portfolio/InvestmentInfoCard';
import InvestmentValueChart from '../components/portfolio/InvestmentValueChart';
import MultiButtonsToggleGroup from '../components/ui/filters/MultiButtonsToggleGroup';
import MyPropertyCard from '../components/portfolio/MyPropertyCard';

import { myInvestedPropertiesTemp } from '../constants';

const Portfolio = () => {
  /**
   * TODO: fetch the data required for all the cards using a single query and pass them to each card as props
   */
  // TEMP: this will be extracted from the fetched data. The keys of the objects in the list can be different. If different then update in the InvestmentValueChart component as well
  const investmentValueChart = [
    { title: 'May', value: '45523' },
    { title: 'June', value: '38163' },
    { title: 'July', value: '51672' },
    { title: 'August', value: '59451' },
    { title: 'September', value: '74123' },
    { title: 'October', value: '64903' },
    { title: 'November', value: '77651' },
  ];

  // TEMP: this will be extracted from the fetched data. The keys of the objects in the list can be different. If different then update in the InvestmentDistributionCard component as well
  const distributionChartData = [
    { propertyType: 'Residential', amountInvested: 225000 },
    { propertyType: 'Commercial', amountInvested: 135000 },
    { propertyType: 'Other', amountInvested: 90000 },
  ];
  const totalInvestedAmount = 450000;

  // TEMP: this will be extracted from the fetched data. The keys of the objects in the list can be different. If different then update in the InvestedPropertyCard component as well
  const myInvestedProperties = [...myInvestedPropertiesTemp]; // this contain all my invested property
  const [filteredProperties, setFilteredProperties] = useState([
    ...myInvestedPropertiesTemp,
  ]);

  // Property type filter options for My Investment Section
  const propTypeFilters = ['All', 'Retail', 'Commercial', 'Residential']; // add more types if required

  const handlePropTypeFiltersChange = filters => {
    /**
     * TODO: If we want handle filtering from server side
     * Call the initial query to fetch My Investments data
     * Initially 'All' filter is set
     * When any changes are made to the filter then the query will recalled and filtered as per selection
     */

    // following code is if we fetch the properties data only when the component is reloaded and filtering is handle from client side
    setFilteredProperties(() => {
      if (filters.includes('All')) {
        return myInvestedProperties;
      }
      return myInvestedProperties.filter(property =>
        filters.includes(property.propertyType)
      );
    });
  };

  return (
    <div className="flex-1 flex bg-neutralgray-100">
      <NavigationSidebar />
      {/* Right side scrollable component */}
      <div className="flex-1 overflow-y-auto relative text-left text-sm text-black font-poppins">
        <div className="absolute top-5 left-[32px] text-5xl font-semibold text-gray-900">
          My Portfolio
        </div>
        <div className="absolute top-[76.5px] left-[0px] box-border w-full h-px border-t-[1px] border-solid border-gainsboro-100" />
        <div className="absolute top-[106px] left-[32px] w-[365px] h-[145px] text-xs text-gray-2000">
          {/* TODO: extract required data from the fetched data to be send for the chart. currently the same common chart data is sent */}
          <InvestmentInfoCard
            cardHeader="TOTAL INVESTMENT"
            amount={26500}
            baseAmount={25000}
            chartData={investmentValueChart}
          />
        </div>
        <div className="absolute top-[106px] left-[421px] w-[365px] h-[145px] text-xs text-gray-2000">
          {/* TODO: extract required data from the fetched data to be send for the chart. currently the same common chart data is sent */}
          <InvestmentInfoCard
            cardHeader="CURRENT VALUE"
            amount={26500}
            baseAmount={27000}
            chartData={investmentValueChart}
          />
        </div>
        <div className="absolute top-[276px] left-[32px] rounded-3xs bg-white w-[754px] h-[362px] text-center text-xs text-neutralgray-500 font-inter">
          {/* TODO: pass required data as props to the chart */}
          <InvestmentValueChart chartData={investmentValueChart} />
        </div>
        <div className="absolute top-[106px] left-[818px] rounded bg-white w-[244px] h-[531px] overflow-hidden text-xl text-neutralgray-700">
          <InvestmentDistributionCard
            chartData={distributionChartData}
            totalInvestedAmount={totalInvestedAmount}
          />
        </div>
        <div className="absolute top-[668px] left-[32px] text-xl rounded-xl bg-white w-[1030px] h-12 overflow-hidden">
          <div className="absolute top-[9px] left-[21px] font-semibold">
            My Investments
          </div>
        </div>
        {/* My investment section -> property type filter */}
        <div className="absolute top-[731px] left-[32px] flex flex-row items-start justify-start gap-[8px]">
          <MultiButtonsToggleGroup
            filters={propTypeFilters}
            initialFilterValue="All"
            onFiltersChange={handlePropTypeFiltersChange}
          />
        </div>
        {/* Grid of my invested properties */}
        <div className="absolute top-[779px] left-[32px] w-[1030px] flex flex-wrap justify-start items-start">
          {filteredProperties.map((property, index) => {
            const isOdd = index % 2 === 0; // Check if the index is odd (0-based)
            const isLastRow =
              index >=
              filteredProperties.length - (filteredProperties.length % 2);

            let classNames = '';

            // Apply "mr-4" for the first item of each row
            if (isOdd) {
              classNames += 'mr-4 ';
            }

            // Apply "mb-4" for all items except those in the last row
            if (!isLastRow) {
              classNames += 'mb-4';
            }

            return (
              <MyPropertyCard
                key={property.id}
                property={property}
                cardClassNames={classNames.trim()}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
